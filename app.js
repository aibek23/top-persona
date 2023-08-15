const express = require('express')
const config = require('config')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors');
const multer = require('multer');
// const News = require('./models/News')
// const Video = require('./models/Video')
// const auth = require('./middleware/auth.middleware');
const User = require('./models/User')
const bcrypt = require('bcryptjs')
const fs = require('fs');
const app = express()
const { ObjectId } = require('mongodb');

app.use(express.json({ extended: true }))
app.use('/views', express.static(path.join(__dirname, 'views')));
app.use('/video', express.static(path.join(__dirname, 'video')));

// app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/vacancies', require('./routes/vacancies.routes'));
// app.use('/api/reviews', require('./routes/reviews.routes'));
app.use('/api/carousel', require('./routes/reviews.carousel.routes'));


if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = config.get('port') || 5000

async function start() {
 

  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    const email = "admin@gmail.com"
    const password = "X6j78rdWsf"
  
    const candidate = await User.findOne({ email })
  
    if (!candidate) {
      
    const hashedPassword = await bcrypt.hash(password, 12)
    const user = new User({email, password: hashedPassword})
     user.save()  
    }
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

start()

