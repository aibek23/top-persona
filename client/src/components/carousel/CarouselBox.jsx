import React from "react";
import Rating from "../Rating";
import { Carousel } from "react-bootstrap";
import s from "./carousel.module.css";
import "./carousel.module.css";

const CarouselBox = () => {
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
  return (<>
    <div className={s.header__container}>
      <i className={s.header__line}></i>
      <Carousel
        prevIcon={customPrevIcon}
        nextIcon={customNextIcon}
        indicators={true}
      >
        <Carousel.Item style={{ background: "" }}>
          <div className="container">
            <div className={s.carousel__container}>
              <div className={s.carousel__img}>
                <img
                  //   className={s.carousel__img}
                  src="https://unitsyn.com/assets/images/doc-corp-elsib/0011.jpg"
                  alt="Second slide"
                />
              </div>

              <div className={s.carousel__item}>
                <p className={s.carousel__text}>
                Имя: Дмитрий (кладчик)
                </p>
                <p className={s.carousel__text}>
                Отзыв: "TOP-Persona" сделали трудоустройство легким и приятным процессом. Благодаря их поддержке, я нашел работу кладчика в строительной компании с отличной репутацией. Они проявили высокий уровень профессионализма и эффективно подобрали вакансии, учитывая мои навыки и опыт. Я рекомендую их всем, кто ищет работу в строительной сфере.
                </p>
                <Rating value={5} />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container">
            <div className={s.carousel__container}>
              <div className={s.carousel__img}>
                <img
                  //   className={s.carousel__img}
                  src="https://s15.stc.yc.kpcdn.net/share/i/12/11412601/wr-960.webp"
                  alt="Second slide"
                />
              </div>

              <div className={s.carousel__item}>
                <p className={s.carousel__text}>
                Имя: Михаил (энергетик)
                </p>
                <p className={s.carousel__text}>
                Отзыв: Сотрудничество с "TOP-Persona" принесло мне радость и удовлетворение. Благодаря их помощи, я нашел интересную работу энергетика в промышленной компании. Их команда проявила профессионализм и внимание к моим желаниям. Теперь я занимаюсь тем, что люблю, и уверенно иду вперед по карьерной лестнице.
                </p>
                <Rating value={5} />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container">
            <div className={s.carousel__container}>
              <div className={s.carousel__img}>
                <img
                  //   className={s.carousel__img}
                  src="https://yandex-images.clstorage.net/pa9Ir6382/b72ec03SXZ/Rh-enlXrfKX0AlBmI2TS3MsiCWlW7vHo0DVYEZoizLmNYnGhUwP6NvWFFvRAlr8RJbVc8cMRIykdz4_DM41jyQNVloFKumnx5VVDJWkxh5jRP0dfasfWmf8RbmGyFfHTpUB8oURIq3rvzlWTKpnEAmXkBreebHt_M96ElBjxK_dzDv3iDO1jvcUPSmJuW-LrhyslU1_o5azKFFp5rzDWxZVbXbNaQIVUqvlTggzYxCNB0RWSv0VAezvMsYM84SjFUCDl_SrTfJDTFnhHWULBwaEVGHNGzeyP-jd7a7ImzcGGaE-ubGq9d7PdTaYFyMkkU8Q-pIBqZU8J5Yq1Pvc111s48cMox2iqzxNuVlxw1duBCyZDXejNr9IcaHqQI_bjmkJ2jnhJoU6sxXSaO9TpAWPOP7KCS3twN-izrTTGBepHKOH_Cd19rsQAU3d0ZN3liQE5cFjv5anOCEVRpBfC7YZ4Z7lmQoZppttQmyLM1DZm5iiikG5OfBHEgp4f-DfKQT7V9TL8SKPGFmxWTk_P-ZUeIHJ4xtCQ5jhIfLMe6s6HSGe5Z2KfU7LyVIUj9OEiRfI9lrVaZnAKx6uTK_QcyVU5ydcC-G-1zRpDQ0JT4t29DwdfdujQrck4e1icJv_FiFdGpGtir1q4-0-jOtL-AljJPqWGQ0dyNdOClCjfKOZdC-PmFsJmqfgtV1dHUPr5pg8-a1TR86XoH0hNlS35wqtBTaFrdp5Pjd9DhwLq2x5f6SGYlVZhSzb-qJom3hXfRSfu5w3ucLbKC1ByY2Ps9YAVDGJj0dyW6jVWTKcM8uONYku1YkueVIXTcqMb1MwIRcYLt7tNR04V-7CSG-M97k8d0eAW20Ox7gZXcVtN3OSiMi51Q-jqs9URbU2nM836i2l_lkhhnnG38nW9OePAM1PdOoqKZlFMD_uatjPjI-FvG8rXPuJbqMoMc3FAT-HlghkOQUXswo_8Ek1_kS4"
                />
              </div>

              <div className={s.carousel__item}>
                <p className={s.carousel__text}>
                Имя: Иван (токар)
                </p>
                <p className={s.carousel__text}>
                Отзыв: С "TOP-Persona" я получил не только работу, но и поддержку на каждом этапе трудоустройства. Они помогли мне подготовиться к собеседованию, подсказали, какие документы необходимо предоставить, и всегда оставались на связи, чтобы следить за процессом. Моя новая должность превзошла все мои ожидания, и я благодарен "TOP-Persona" за это.
                </p>
                <Rating value={5} />
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
     
    </div>
  
   </>
  );
};

export default CarouselBox;
