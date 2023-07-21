import React from "react";
import Form from "../components/Form";
import { BiSolidTime } from "react-icons/bi";
import {RiFilePaper2Fill,RiTodoFill} from "react-icons/ri";
import {BsFillClipboard2CheckFill} from "react-icons/bs"
const Courses = () => {
  return (
    <div className="container mt-4">
      <div className="row pb-5 pt-5">
        <div className="col-md-6">
          <div className="card pt-2" style={{ border: "none" }}>
            <div
              className="card-body "
              style={{
                color: "white",
                borderRadius: "10px",
              }}
            >
              <img
                style={{
                  objectFit: "cover",
                  width: "100%",
                  borderRadius: "10px",
                  height: "100%",
                }}
                src="https://yup.com/static/140e2294abd21d73a00fcc2ccbb3157e/23942/depositphotos_10916856_xl.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          className="col-md-6 "
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div className="d-flex">
            <div
               className="m-3"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div>
                <BiSolidTime size={40} style={{color:"#478AC9"}}/>
              </div>
            </div>
            <div>
              <p  style={{ border: "none",fontWeight: 500 ,fontSize:"1.7rem"}}>
              11 лет на рынке
              </p>

            </div>
          </div>

          <div className="d-flex">
            <div
                className="m-3"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div>
                <RiFilePaper2Fill size={40} style={{color:"#478AC9"}}/>
              </div>
            </div>
           < div>
              <p  style={{ border: "none",fontWeight: 500 ,fontSize:"1.7rem"}}>
              Подготовка к Гете сертификату
              </p>

            </div>
          </div>
          <div className="d-flex">
            <div
              className="m-3"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div>
                <RiTodoFill size={40} style={{color:"#478AC9"}}/>
              </div>
            </div>
            < div>
              <p  style={{ border: "none",fontWeight: 500 ,fontSize:"1.7rem"}}>
              Опытные и сертифицированные преподаватели
              </p>

            </div>
          </div>
          <div className="d-flex">
            <div
              className="m-3"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div>
                <BsFillClipboard2CheckFill size={40} style={{color:"#478AC9"}}/>
              </div>
            </div>
            < div>
              <p  style={{ border: "none",fontWeight: 500 ,fontSize:"1.7rem"}}>
              Отличные результаты и успехи учеников
              </p>

            </div>
          </div>
        </div>
      </div>
      <div className="row pb-5 pt-5">
        <div className="col-md-7 pb-5">
          <h1
            className="mb-4  text-center"
            style={{
              color: "#D78059",
              textAlign: "center",
              fontSize: "40px",
              textShadow: "2px 2px #FFFFD8",
            }}
          >
            Выучите немецкий язык
          </h1>
          <p className="lead">
            Узнайте немецкий язык и путешествуйте по всей Европе! Наши
            захватывающие курсы помогут вам готовиться к получению престижного
            Гете сертификата. Опытные преподаватели сосредоточатся на
            разговорной практике, чтении, письме и понимании на слух, чтобы вы
            чувствовали себя уверенно и комфортно, общаясь на немецком языке.
          </p>
          <p className="lead">
            В нашем центре вам предоставится уникальная возможность окунуться в
            культуру и историю немецкоговорящих стран. Вы узнаете больше о
            традициях, искусстве, гастрономии и достопримечательностях Европы.
          </p>
          <p className="lead pb-5">
            Не упустите шанс обогатить свой жизненный опыт, научиться новому
            языку и открыть для себя новые культуры. Присоединяйтесь к нам и
            отправляйтесь в увлекательное путешествие по Европе, пользуясь
            своими знаниями немецкого языка и получая ценный Гете сертификат,
            который признается многими компаниями и учебными заведениями во всем
            мире.
          </p>
        </div>
        <div className="col-md-5">
          <h2
            className="mb-4 pt-5"
            style={{ color: "#707987", fontSize: "18px", fontWeight: "300" }}
          >
            Предоставьте нам вашу контактную информацию, и мы свяжемся с вами в
            ближайшее время.
          </h2>
          <div className="card" style={{ border: "none" }}>
            <div
              className="card-body "
              style={{
                background: "#478AC9",
                color: "white",
                borderRadius: "10px",
              }}
            >
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
