import React,{useEffect,useState} from "react";
import Carousel from "../components/carousel/CarouselBox";
import Rating from "../components/Rating";
import s from "../components/carousel/carousel.module.css";
const Reviews = () => {
    const [screenWidth, setScreenWidth] = useState(false);
  
    const handleResize = () => {
      if (window.innerWidth>720) {
        setScreenWidth(false);
      }else{
        setScreenWidth(true);
      }
    };
  
    useEffect(() => {
      // Добавляем слушатель события "resize" для обновления ширины при изменении размера окна
      window.addEventListener("resize", handleResize);
  
      // Удаляем слушатель события при размонтировании компонента, чтобы избежать утечек памяти
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []); 
    return(
        <>
        <Carousel/>
          <div className={s.reviews__container} >
            <div className="container">
            <div className="row">
          <div  className={`col-lg-6 d-flex  justify-content-center ${!screenWidth?"order-lg-1":"order-lg-2"}`}>
            <div className={s.reviews__item}>
              <p className={s.reviews__text}>
              Имя: Анна (медсестра)
              </p>
              <p className={s.reviews__text}>
              Отзыв: "TOP-Persona" стала моим надежным партнером в трудоустройстве. Благодаря их помощи, я нашла работу медсестры в престижной клинике. Они были внимательны к моим предпочтениям и предложили варианты, которые полностью соответствовали моим ожиданиям. Работа приносит мне удовлетворение и гордость.
              </p>
              <Rating value={5} />
            </div>
          </div>
          <div className={`col-lg-6 d-flex  justify-content-center ${screenWidth?"order-lg-1":"order-lg-2"}`} >
            <div className={s.reviews__img}>
              <img
                //   className={s.carousel__img}
                src="https://storage.yandexcloud.net/gazeti/kranogvar56/2023/01/2-890x530.jpg"
              />
            </div>
          </div>
          </div>
          </div>
        </div>
        </>
    )
}
export default Reviews;