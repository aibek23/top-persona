
const { Router } = require('express');
const path = require('path');
const auth = require('../middleware/auth.middleware');
const ReviewsCarousel = require('../models/ReviewsCarousel');
// const VacanciesPage = require('../models/VacanciesPage');
const fs = require('fs');
const multer = require('multer');
const router = Router();

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../views/reviews'),
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

// Обработчик ошибок для асинхронных функций
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// /api/carousel/save
router.post('/save', auth, async (req, res) => {
  try {
    let upload = multer({ storage: storage }).single('image');
    upload(req, res, async function (err) {
      if (err) {
        return res.status(400).json({ message: 'Ошибка загрузки файла' });
      }
      if (!req.body.image[0]) {
        return res.status(400).json({ message: 'пожалуйста заполните имя' });
      }
      if (!req.body.image[1]) {
        return res.status(400).json({ message: 'пожалуйста заполните описание' });
      }
      const newData = {
        imageSrc: req.file.filename,
        title: req.body.image[0],
        description: req.body.image[1],
      };

      if (req.body.image[4]) {
        try {
          const updatedCarousel = await ReviewsCarousel.findByIdAndUpdate(req.body.image[4], newData, { new: true });
          if (!updatedCarousel) {
            return res.status(404).json({ message: 'Запись с указанным идентификатором не найдена' });
          }
          return res.json({ message: 'Данные успешно обновлены' });
        } catch (err) {
          return res.status(500).json({ message: 'Ошибка при обновлении записи в базе данных', error: err });
        }
      } else {
        const reviewsCarousel = new ReviewsCarousel(newData);
        await reviewsCarousel.save();
        res.json({ message: 'Новая запись успешно создана' });
      }
    });
  } catch (e) {
    res.status(500).json({ message: 'Внутренняя ошибка сервера' });
  }
});

// /api/carousel/delete 
router.post('/delete', auth, asyncHandler(async (req, res) => {
  const _id = req.body._id.toString();
  if (!_id || typeof _id !== 'string') {
    return res.status(400).json({ message: 'Invalid _id' });
  }

  const filteredData = await ReviewsCarousel.findOne({ _id });
  if (!filteredData) {
    return res.status(404).json({ message: 'Data not found' });
  }

  fs.unlink(`${path.dirname(__dirname)}/views/reviews/${filteredData.imageSrc}`, (err) => {
    if (err) {
      console.log(err);
    }
  });

  await ReviewsCarousel.deleteOne({ _id });
  res.json({ message: 'Данные успешно удалены' });
}));

// /api/carousel/show
router.post('/show', asyncHandler(async (req, res) => {
  const allData = await ReviewsCarousel.find();
  res.json(allData);
}));

// /api/carousel/showid
router.post('/showid', asyncHandler(async (req, res) => {
  const _id = req.body._id;
  const filteredData = await ReviewsCarousel.findOne({ _id });
  res.json(filteredData);
}));

// // /api/vacancies/page
// router.post('/page', asyncHandler(async (req, res) => {
//   const id = req.body._id;
//   if (!id || typeof id !== 'string') {
//     return res.status(400).json({ message: 'Invalid _id' });
//   }

//   const filteredData = await VacanciesPage.findOne({ id });
//   if (!filteredData) {
//     const vacanciesPage = new VacanciesPage({ id, data: '' });
//     await vacanciesPage.save();
//     res.json(vacanciesPage);
//   } else {
//     res.json(filteredData);
//   }
// }));

// // /api/vacancies/page/save
// router.post('/page/save', auth, asyncHandler(async (req, res) => {
//   const _id = req.body._id;
//   if (!_id || typeof _id !== 'string') {
//     return res.status(400).json({ message: 'Invalid _id' });
//   }

//   const data = req.body.data;
//   if (!data) {
//     return res.status(400).json({ message: 'Data not found' });
//   }

//   const updatedVacancy = await VacanciesPage.findByIdAndUpdate(_id, { data }, { new: true });
//   if (!updatedVacancy) {
//     return res.status(404).json({ message: 'Запись с указанным идентификатором не найдена' });
//   }

//   return res.json({ message: 'Данные успешно обновлены' });
// }));

module.exports = router;
