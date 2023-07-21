import React from "react";
import { Link } from "react-router-dom";
import Platzhalter from "../img/Platzhalter-1.jpg";
const CartList = ({ imageSrc, title, description, salary, url,icons }) => {
    const handleImageError = (e) => {
        // Функция для обработки ошибки загрузки изображения
        e.target.src = Platzhalter
      };
  return (
    <Link to={url}  className="col-lg-4" style={{textDecoration: "none",color:"black"}}>

      <div className="mb-3 h-100 d-flex flex-column">
        <div className="container">
          <div style={{ height: "200px", overflow: "hidden" }}>
            <img
              style={{ objectFit: "cover", width: "100%", height: "100%",borderRadius:"10px" }}
              src={imageSrc}
              className="card-img"
              alt="Vacancy Thumbnail"
              onError={handleImageError}
            />
          </div>
          <div className="">
            <div className="card-body">
              {/* Заголовок вакансии */}
              <h5 className="card-title mt-2">      {icons ? ( <img src={icons}    style={{ objectFit: "cover", width: "35px", height: "100%" }} />):""} {title}</h5>
              <p className="card-text">
                {description}
              </p>
              <p className="card-text" style={{ color: "#F72C00" }}>
                <small className="text-muted">{salary}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default CartList;