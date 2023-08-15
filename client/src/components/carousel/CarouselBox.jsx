import React, {
  useCallback,
  useContext,
  useState,
  useEffect,
} from "react";
import { useHttp } from "../../hooks/http.hook";
import Rating from "../Rating";
import { Carousel } from "react-bootstrap";
import s from "./carousel.module.css";
import "./carousel.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Platzhalter from "../../img/Platzhalter-1.jpg";

const CarouselBox = () => {
  const { loading, request, error, clearError } = useHttp()
  const [data, setData] = useState([]);
  const fetchData = useCallback(async () => {
    try {
      const response = await request('/api/carousel/show', 'POST')
      setData(response);
    } catch (e) {
      if (e.message === 'Network Error') {
        toast.error('Network error. Please check your internet connection.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        clearError()
      } else {
        toast.error(`An error occurred: ${e.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        clearError()
      }
    }
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const customPrevIcon = (
    <span
      className="carousel-control-prev-icon"
      style={{
        backgroundColor: "black",
        opacity: "0.2",
        width: "40px",
        height: "50px",
        borderRadius: "10px",
      }}
    />
  );

  const customNextIcon = (
    <span
      className="carousel-control-next-icon"
      style={{
        backgroundColor: "black",
        opacity: "0.1",
        width: "40px",
        height: "50px",
        borderRadius: "10px",
      }}
    />
  );
  const handleImageError = (e) => {
    // Функция для обработки ошибки загрузки изображения
    e.target.src = Platzhalter;
  };
  return (<>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

    <div className={s.header__container}>
      <i className={s.header__line}></i>
      <Carousel
        prevIcon={customPrevIcon}
        nextIcon={customNextIcon}
        indicators={true}
      >
       {data.map(e=>(
          <Carousel.Item key={e._id}>
          <div className="container">
            <div className={s.carousel__container}>
              <div className={s.carousel__img}>
                <img
                  //   className={s.carousel__img}
                  src={`${window.location.protocol + '//' + window.location.host + '/views/reviews/' +e.imageSrc}`}
                  onError={handleImageError}
                />
              </div>

              <div className={s.carousel__item}>
                <p className={s.carousel__text}>
               {e.title}
                </p>
                <p className={s.carousel__text}>
                {e.description}
                </p>
                <Rating value={5} />
              </div>
            </div>
          </div>
        </Carousel.Item>
       ))}
      </Carousel>
     
    </div>
  
   </>
  );
};

export default CarouselBox;
