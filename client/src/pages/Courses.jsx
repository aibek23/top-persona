import React from "react";
import Form from "../components/Form";
import { BiSolidTime } from "react-icons/bi";
import { RiFilePaper2Fill, RiTodoFill } from "react-icons/ri";
import { BsFillClipboard2CheckFill } from "react-icons/bs";
import { Helmet } from "react-helmet";
const Courses = () => {
  return (
    <>
      <Helmet>
        <title>Курс немецкого языка</title>
        <meta
          name="description"
          content="Изучите немецкий язык с нуля или улучшите свои знания вместе с нашим курсом немецкого языка в Бишкеке. Узнайте грамматику, лексику, произношение и письмо на немецком языке, а также познакомьтесь с культурой и историей Германии, Австрии и Швейцарии. Получите необходимые навыки для говорения на немецком языке на базовом уровне и продолжайте изучать язык на более высоком уровне."
        />
        <meta
          name="keywords"
          content="курсы немецкого языка в Бишкеке, изучение немецкого языка в Кыргызстане, немецкий язык для начинающих в Бишкеке, преподаватели немецкого языка в Бишкеке, языковые курсы для студентов и профессионалов, интенсивные курсы немецкого языка в Бишкеке, подготовка к экзаменам по немецкому языку (например, Goethe-Zertifikat), онлайн-курсы немецкого языка в Бишкеке, курсы немецкого языка для детей и подростков в Бишкеке, немецкий язык для работы и учебы в Германии, Австрии и Швейцарии, емецкий язык, изучение, курс, основы, грамматика, лексика, произношение, Курсы немецкого языка с носителями языка в Бишкеке, курсы немецкого языка на выходных, индивидуальные занятия немецким языком, бизнес-немецкий, немецкий язык для туризма, немецкий язык для общения, немецкий язык для поступления в вузы за рубежом, немецкий язык для эмиграции, немецкий язык для зарубежной работы, Начальный, средний и продвинутый уровни немецкого языка, групповые занятия, индивидуальный подход к каждому студенту, опытные преподаватели, удобное расписание занятий, интенсивные курсы в летний период, использование современных методик обучения, обучение немецкому языку для повышения квалификации и профессионального развития, курсы немецкого языка для резюме и собеседований, немецкий язык для исследования и научных работ, курсы немецкого языка для медиков и фармацевтов, немецкий язык для юристов и бизнесменов, курсы немецкого языка для литературоведов и историков, курсы немецкого языка для тех, кто хочет жить и учиться в Германии, Австрии или Швейцарии"
        />
        <meta name="author" content="TOP-Persona" />
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="http://top-persona.kg/views/images/logo192.png"></meta>
        {/* Дополнительные мета-теги */}
      </Helmet>
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
                  <BiSolidTime size={40} style={{ color: "#478AC9" }} />
                </div>
              </div>
              <div>
                <p
                  style={{
                    border: "none",
                    fontWeight: 500,
                    fontSize: "1.7rem",
                  }}
                >
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
                  <RiFilePaper2Fill size={40} style={{ color: "#478AC9" }} />
                </div>
              </div>
              <div>
                <p
                  style={{
                    border: "none",
                    fontWeight: 500,
                    fontSize: "1.7rem",
                  }}
                >
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
                  <RiTodoFill size={40} style={{ color: "#478AC9" }} />
                </div>
              </div>
              <div>
                <p
                  style={{
                    border: "none",
                    fontWeight: 500,
                    fontSize: "1.7rem",
                  }}
                >
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
                  <BsFillClipboard2CheckFill
                    size={40}
                    style={{ color: "#478AC9" }}
                  />
                </div>
              </div>
              <div>
                <p
                  style={{
                    border: "none",
                    fontWeight: 500,
                    fontSize: "1.7rem",
                  }}
                >
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
              В нашем центре вам предоставится уникальная возможность окунуться
              в культуру и историю немецкоговорящих стран. Вы узнаете больше о
              традициях, искусстве, гастрономии и достопримечательностях Европы.
            </p>
            <p className="lead pb-5">
              Не упустите шанс обогатить свой жизненный опыт, научиться новому
              языку и открыть для себя новые культуры. Присоединяйтесь к нам и
              отправляйтесь в увлекательное путешествие по Европе, пользуясь
              своими знаниями немецкого языка и получая ценный Гете сертификат,
              который признается многими компаниями и учебными заведениями во
              всем мире.
            </p>
          </div>
          <div className="col-md-5">
            <h2
              className="mb-4 pt-5"
              style={{ color: "#707987", fontSize: "18px", fontWeight: "300" }}
            >
              Предоставьте нам вашу контактную информацию, и мы свяжемся с вами
              в ближайшее время.
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
    </>
  );
};

export default Courses;
