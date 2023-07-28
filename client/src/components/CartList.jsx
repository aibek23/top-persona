import React from "react";
import { Link } from "react-router-dom";
import Platzhalter from "../img/Platzhalter-1.jpg";

const CartList = ({ imageSrc, title, description, salary, searchQuery , id}) => {
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
export default CartList;
