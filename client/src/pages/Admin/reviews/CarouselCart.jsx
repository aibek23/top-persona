import React from "react";
import Platzhalter from "../../../img/Platzhalter-1.jpg";
import { FaCog } from 'react-icons/fa';
import {AiFillDelete} from 'react-icons/ai'
const CarouselCart = ({ imageSrc, title, description, id, getId ,delate}) => {
  const handleImageError = (e) => {
    // Функция для обработки ошибки загрузки изображения
    e.target.src = Platzhalter;
  };

  const handleDelateClick = (e) => {
    e.preventDefault()
    delate(id)
  }
  const handleSettingsClick = (e) => {
    e.preventDefault()
    getId(id)
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Добавьте эту опцию, чтобы прокрутка была плавной
    });
  }
  return (
<div
  className=""
>
  <div className="">
    <div className="container" style={{ position: "relative" }}>
      <div style={{ height: "200px", overflow: "hidden" }}>
        <img
          style={{

            height: "200px",

            borderRadius: "10px",
          }}
          src={window.location.protocol + '//' + window.location.host + '/views/reviews/' +imageSrc}
          className=""
          alt="Vacancy Thumbnail"
          onError={handleImageError}
        />
        <div className="watermark"> {/* Водяной знак будет добавлен здесь */}
        <div
          style={{
            position: "absolute",
            top: "25px",
            right: "45px",
            transform: "translate(-50%, -50%)",
            zIndex: 1, // Чтобы кнопка была выше водяного знака
          }}
        >
    
          <button
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            onClick={(e)=>handleDelateClick(e)}
          >
            <AiFillDelete size={24} color="red" style={{ border: "solid 1px white",}} />
          </button>
          </div>
          </div>
          <div className="watermark">
          <div
          style={{
            position: "absolute",
            top: "25px",
            right: "15px",
            transform: "translate(-50%, -50%)",
            zIndex: 1, // Чтобы кнопка была выше водяного знака
          }}
        >
          <button
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            onClick={(e)=>handleSettingsClick(e)}
          >
            <FaCog size={24} color="black" style={{ border: "solid 1px white",}} />
          </button>
          

        </div>
      </div>
      </div>
      <div className="mb-4">
          <p className="card-title mt-2">
            {title}
          </p>
          <p className="card-text">{description}</p>
        </div>
      </div>
  </div>
</div>
  );
};
export default CarouselCart;




