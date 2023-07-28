import React from "react";
import { Link } from "react-router-dom";
import Platzhalter from "../img/Platzhalter-1.jpg";
import { FaCog } from 'react-icons/fa';
import {AiFillDelete} from 'react-icons/ai'
const VacanciesCartList = ({ imageSrc, title, description, salary, searchQuery , id, getId ,delate}) => {
  const handleImageError = (e) => {
    // Функция для обработки ошибки загрузки изображения
    e.target.src = Platzhalter;
  };
  const highlightSearchQuery = (text) => {
    if (!searchQuery || !text) return text;

    const regex = new RegExp(`(${searchQuery})`, 'gi');
    return text.split(regex).map((part, index) =>
      regex.test(part) ? <span className="highlight" key={index}>{part}</span> : part
    );
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
<Link
  to={id}
  className="col-lg-4"
  style={{ textDecoration: "none", color: "black", position: "relative" }}
>
  <div className="mb-3 h-100 d-flex flex-column">
    <div className="container" style={{ position: "relative" }}>
      <div style={{ height: "200px", overflow: "hidden" }}>
        <img
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            borderRadius: "10px",
          }}
          src={window.location.protocol + '//' + window.location.host + '/views/' +imageSrc}
          className="card-img"
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
      <div className="">
        <div className="card-body">
          {/* Заголовок вакансии */}
          <h5 className="card-title mt-2">
            {/* {title} */}
            {highlightSearchQuery(title)}
          </h5>
          <p className="card-text">{highlightSearchQuery(description)}</p>
          <p className="card-text" style={{ color: "#F72C00" }}>
            <small className="text-muted">{highlightSearchQuery(salary)}</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</Link>
  );
};
export default VacanciesCartList;
