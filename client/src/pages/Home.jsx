import React from "react";
import { YMaps, Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";
import { Link  } from "react-router-dom";
import img1 from "../images/cvxcx-min.jpg";
import img2 from "../images/vbbv-min.jpg";
import img3 from "../images/1828743-348625e0.png";
import img4 from "../images/1828743-348625e0.png";
import img5 from "../img/TcQoixD0LZ0.jpg";
import img6 from "../img/Konstrukteur.webp";
import img7 from "../img/1164.jpg";
import img8 from "../img/EMQRkkgdCHM.jpg";
import img9 from "../images/10763e66-8840-46ef-9114-0df70bb391fa.jpg";
import img10 from "../img/507bfe31d93ac068001f2064e6d8bd14-min.jpg";
import img11 from "../img/1674649320_top-fon-com-p-nemetskii-fon-dlya-prezentatsii-101.jpg";
import img12 from "../img/0920afe67d667cb16763556276586015.jpg";
import img13 from "../img/FRebMCiWYAAbFK2.jpg";
import img14 from "../img/KyrgyzstanFlag_338314.jpg";

import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { GrMail } from "react-icons/gr";
// import video1 from "../video/video1.mp4";
import "../App.css";
import Form from "../components/Form";

const Home = () => {
  return (
    <>
      <section
        className="u-align-center u-clearfix u-grey-15 u-section-1"
        id="carousel_5288"
      >
        <img
          className="u-expanded-width u-image u-image-1"
          src={img1}
          alt='header img'
        />
        <div
          className="u-align-left u-container-align-left-lg u-container-align-left-md u-container-align-left-sm u-container-align-left-xl u-container-style u-group u-palette-1-base u-radius-10 u-shape-round u-group-1"
          data-animation-name="customAnimationIn"
          data-animation-duration={1000}
        >
          <div className="u-container-layout u-container-layout-1">
            <h1
              className="u-align-left u-text u-text-1"
              data-animation-name="customAnimationIn"
            >
              Компания по трудоустройству "TOP-Persona"
            </h1>
            <h2
              className="u-align-left u-text u-text-default u-text-2"
              data-animation-name="customAnimationIn"
              style={{ fontSize: "1.2rem" }}
            >
              Легально трудоустраиваем в Германии, Польше, Латвии и Литве с
              официального согласия европейского работодателя
            </h2>
            <a
              href="/#about"
              className="u-align-center-xs u-align-left-lg u-align-left-md u-align-left-sm u-align-left-xl u-border-2 u-border-white u-btn u-btn-round u-button-style u-custom-color-1 u-radius-10 u-text-active-palette-1-base u-text-hover-palette-1-base u-btn-1"
              data-animation-name="customAnimationIn"
              data-animation-duration={1500}
              data-animation-delay={500}
            >
              Ознакомиться
            </a>
          </div>
        </div>
      </section>
      <section
        className="u-align-center u-clearfix u-grey-15 u-section-2 "
        id="carousel_2295"
      >
        <div className="u-clearfix u-sheet u-sheet-1 container">
          <h2
            className=" u-text-1 "
            style={{textAlign:"center"}}
          >
            почему выбирают нас ?
          </h2>
          <p
            className="u-text u-text-2"
            data-animation-name="customAnimationIn"
          >
            
          </p>
          <div className="u-expanded-width u-list u-list-1">
            <div className="u-repeater u-repeater-1">
              <div
                className="u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-md u-align-left-xl u-container-style u-image u-list-item u-repeater-item u-shading u-image-1"
                data-image-width={1014}
                data-image-height={700}
              >
                <div className="u-container-layout u-similar-container u-valign-top-xl u-container-layout-1">
                  <span
                    className="u-align-center-lg u-align-center-md u-align-center-sm u-align-center-xs u-icon u-icon-circle u-opacity u-opacity-70 u-palette-1-light-3 u-text-palette-1-base u-icon-1"
                    data-animation-name="customAnimationIn"
                    data-animation-duration={1500}
                    data-animation-delay={500}
                  >
                    <svg
                      className="u-svg-link"
                      preserveAspectRatio="xMidYMin slice"
                      viewBox="0 0 512 512"
                      style={{}}
                    >
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="#svg-ebe3"
                      />
                    </svg>
                    <svg
                      className="u-svg-content"
                      viewBox="0 0 512 512"
                      x="0px"
                      y="0px"
                      id="svg-ebe3"
                      style={{ enableBackground: "new 0 0 512 512" }}
                    >
                      <g>
                        <g>
                          <path d="M165,332c-7.99,0-15-7.477-15-16c0-6.286,3.965-11.953,9.866-14.103c7.7-2.806,16.673,0.999,24.606,10.445    c5.33,6.344,14.79,7.167,21.134,1.839s7.167-14.79,1.839-21.133c-8.109-9.656-17.548-16.293-27.445-19.625V256    c0-8.284-6.716-15-15-15s-15,6.716-15,15v17.572c-0.134,0.047-0.268,0.088-0.401,0.137C131.895,280.157,120,297.153,120,316    c0,11.955,4.597,23.347,12.944,32.079C141.526,357.056,152.911,362,165,362c8.271,0,15,6.729,15,15    c0,6.042-3.596,11.468-9.159,13.825c-6.717,2.844-14.755,0.417-22.059-6.659c-5.951-5.764-15.445-5.614-21.211,0.335    c-5.764,5.95-5.614,15.446,0.336,21.21c6.772,6.561,14.301,11.197,22.093,13.813V437c0,8.284,6.716,15,15,15s15-6.716,15-15    v-17.571c18.295-6.504,30-23.575,30-42.429C210,352.187,189.813,332,165,332z"></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M463,18.844C435.379,6.692,399.155,0,361,0c-78.082,0-150,28.671-150,75c0,11.591,0,101.714,0,112.545    c-14.791-4.307-30.239-6.545-46-6.545c-43.972,0-85.406,17.376-116.67,48.928C17.164,261.381,0,302.958,0,347    c0,90.981,74.019,165,165,165c30.361,0,59.55-8.159,85.059-23.438C277.958,503.529,317.713,512,361,512    c38.155,0,74.379-6.692,102-18.844c31.598-13.901,49-33.845,49-56.156c0-9.342,0-352.464,0-362    C512,52.688,494.598,32.745,463,18.844z M165,482c-74.439,0-135-60.561-135-135c0-74.991,60.561-136,135-136    c74.99,0,136,61.009,136,136C301,421.439,239.99,482,165,482z M482,437c0,18.348-47.137,45-121,45    c-31.422,0-61.106-5.036-83.63-13.86c1.589-1.46,3.161-2.943,4.703-4.47c13.507-13.384,24.406-28.635,32.467-45.148    C329.443,420.82,345.011,422,361,422c39.443,0,88.356-7.667,121-29.019V437z M482,347c0,18.348-47.137,45-121,45    c-12.237,0-24.166-0.765-35.661-2.246C329.066,375.97,331,361.627,331,347c0-5.889-0.321-11.733-0.935-17.517    c10.104,1,20.445,1.517,30.935,1.517c39.446,0,88.355-7.668,121-29.019V347z M482,256c0,18.348-47.137,45-121,45    c-12.768,0-25.26-0.835-37.274-2.458c-7.785-25.252-21.674-48.495-40.917-67.958C306,237.356,332.938,241,361,241    c39.446,0,88.355-7.668,121-29.019V256z M482,166c0,18.348-47.137,45-121,45c-34.007,0-65.745-5.782-89.367-16.281    C252.737,186.322,241,175.317,241,166v-44.805C273.474,142.481,321.972,150,361,150c39.446,0,88.355-7.668,121-29.019V166z     M361,120c-73.276,0-120-26.255-120-45c0-18.803,46.857-45,120-45c73.863,0,121,26.652,121,45S434.863,120,361,120z"></path>
                        </g>
                      </g>
                    </svg>
                  </span>
                  <h3
                    className="u-align-center-lg u-align-center-md u-align-center-sm u-align-center-xs u-heading-font u-text u-text-3"
                    data-animation-name="customAnimationIn"

                  >
                    Опыт и надежность
                  </h3>
                  <p
                    className="u-text u-text-4"
                    data-animation-name="customAnimationIn"
                    data-animation-duration={1500}
                    data-animation-delay={500}
                  >
                    Мы - профессиональная команда с богатым опытом в трудоустройстве за рубежом. Доверьтесь нам и уверенно шагните к своей международной карьере.
                  </p>
                </div>
              </div>
              <div
                className="u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-md u-align-left-xl u-container-style u-image u-list-item u-repeater-item u-shading u-video-cover u-image-2"
                data-image-width={626}
                data-image-height={417}
              >
                <div className="u-container-layout u-similar-container u-valign-top-xl u-container-layout-2">
                  <span
                    className="u-align-center-lg u-align-center-md u-align-center-sm u-align-center-xs u-icon u-icon-circle u-opacity u-opacity-70 u-palette-1-light-3 u-text-palette-1-base u-icon-2"
                    data-animation-name="customAnimationIn"
                    data-animation-duration={1500}
                    data-animation-delay={500}
                  >
                    <svg
                      className="u-svg-link"
                      preserveAspectRatio="xMidYMin slice"
                      viewBox="0 0 297 297"
                      style={{}}
                    >
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="#svg-3005"
                      />
                    </svg>
                    <svg
                      className="u-svg-content"
                      viewBox="0 0 297 297"
                      id="svg-3005"
                    >
                      <g>
                        <path d="m255.402,41.116c-22.937,0-41.599,18.661-41.599,41.598s18.661,41.599 41.599,41.599c22.937,0 41.598-18.662 41.598-41.599s-18.661-41.598-41.598-41.598zm0,65.786c-13.338,0-24.188-10.85-24.188-24.188 0-13.337 10.85-24.187 24.188-24.187 13.337,0 24.187,10.85 24.187,24.187 0.001,13.338-10.85,24.188-24.187,24.188z"></path>
                        <path d="m10.772,97.093c1.7,1.699 3.928,2.549 6.156,2.549s4.456-0.85 6.156-2.549l22.626-22.626 22.626,22.626c1.7,1.699 3.928,2.549 6.156,2.549 2.228,0 4.456-0.85 6.156-2.549 3.399-3.399 3.399-8.912 0-12.312l-22.627-22.625 22.626-22.626c3.399-3.399 3.399-8.912 0-12.312-3.4-3.398-8.911-3.398-12.312,0l-22.625,22.626-22.626-22.626c-3.4-3.398-8.911-3.398-12.312,0-3.399,3.399-3.399,8.912 0,12.312l22.626,22.626-22.626,22.625c-3.399,3.4-3.399,8.912 1.77636e-15,12.312z"></path>
                        <path d="m195.772,199.907c-3.4-3.398-8.911-3.398-12.312,0l-22.625,22.625-22.626-22.625c-3.4-3.398-8.911-3.398-12.312,0-3.399,3.4-3.399,8.912 0,12.312l22.626,22.625-22.626,22.626c-3.399,3.399-3.399,8.912 0,12.312 1.7,1.699 3.928,2.549 6.156,2.549s4.456-0.85 6.156-2.549l22.626-22.626 22.625,22.625c1.7,1.699 3.928,2.549 6.156,2.549 2.228,0 4.456-0.85 6.156-2.549 3.399-3.4 3.399-8.912 0-12.312l-22.625-22.625 22.625-22.625c3.4-3.4 3.4-8.913 0-12.312z"></path>
                        <path d="m196.45,77.836l-35.107-30.518c-3.628-3.155-9.127-2.768-12.281,0.859-3.154,3.628-2.769,9.126 0.859,12.281l18.618,16.185c-54.952,7.187-87.489,35.904-105.577,60.176-15.843,21.26-23.25,42.201-26.224,52.608-20.654,2.415-36.738,20.012-36.738,41.305 0,22.937 18.661,41.599 41.598,41.599s41.599-18.661 41.599-41.599c0-18.464-12.096-34.148-28.777-39.567 3.133-9.898 9.919-27.229 22.924-44.503 22.64-30.071 54.091-47.78 93.656-52.816l-17.348,19.957c-3.154,3.628-2.769,9.126 0.859,12.281 1.648,1.433 3.682,2.135 5.707,2.135 2.433,0 4.853-1.014 6.574-2.994l30.518-35.108c3.154-3.629 2.769-9.126-0.86-12.281zm-130.664,152.896c0,13.338-10.85,24.188-24.188,24.188-13.337,0-24.187-10.85-24.187-24.188 0-13.337 10.85-24.187 24.187-24.187 13.337,0 24.188,10.85 24.188,24.187z"></path>
                      </g>
                    </svg>
                  </span>
                  <h3
                    className="u-align-center-lg u-align-center-md u-align-center-sm u-align-center-xs u-heading-font u-text u-text-5"
                    data-animation-name="customAnimationIn"
                    data-animation-duration={1250}
                    data-animation-delay={500}
                  >
                    Европейские партнеры
                  </h3>
                  <p
                    className="u-text u-text-6"
                    data-animation-name="customAnimationIn"
                    data-animation-duration={1500}
                    data-animation-delay={500}
                  >
                    Сотрудничая с ведущими работодателями в Европе, мы поможем вам обрести престижную работу, которая соответствует вашим профессиональным амбициям.
                  </p>
                </div>
              </div>
              <div
                className="u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-md u-align-left-xl u-container-style u-image u-list-item u-repeater-item u-shading u-video-cover u-image-3"

              >
                <div className="u-container-layout u-similar-container u-valign-top-xl u-container-layout-3">
                  <span
                    className="u-align-center-lg u-align-center-md u-align-center-sm u-align-center-xs u-icon u-icon-circle u-opacity u-opacity-70 u-palette-1-light-3 u-text-palette-1-base u-icon-3"
                    data-animation-name="customAnimationIn"
    
                  >
                    <svg
                      className="u-svg-link"
                      preserveAspectRatio="xMidYMin slice"
                      viewBox="0 0 510 510"
                      style={{}}
                    >
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="#svg-529f"
                      />
                    </svg>
                    <svg
                      className="u-svg-content"
                      viewBox="0 0 510 510"
                      id="svg-529f"
                    >
                      <g>
                        <path d="m393.159 121.41 69.152-86.44c-16.753-2.022-149.599-37.363-282.234-8.913v-26.057h-30v361.898c-25.85 6.678-45 30.195-45 58.102v1.509c-34.191 6.969-60 37.272-60 73.491v15h240v-15c0-36.22-25.809-66.522-60-73.491v-1.509c0-27.906-19.15-51.424-45-58.102v-124.733c153.335-30.989 264.132 7.082 284.847 9.834zm-140.653 358.59h-174.859c6.19-17.461 22.873-30 42.43-30h90c19.556 0 36.238 12.539 42.429 30zm-57.429-60h-60c0-16.542 13.458-30 30-30s30 13.458 30 30zm-15-213.427v-149.802c66.329-15.269 141.099-15.756 227.537-1.455l-50.619 63.274 48.8 85.4c-75.047-12.702-150.759-11.841-225.718 2.583z"></path>
                      </g>
                    </svg>
                  </span>
                  <h3
                    className="u-align-center-lg u-align-center-md u-align-center-sm u-align-center-xs u-heading-font u-text u-text-7"
                    data-animation-name="customAnimationIn"

                  >
                     КОМАНДА ПРОФЕССИОНАЛОВ
                  </h3>
                  <p
                    className="u-text u-text-8"
                    data-animation-name="customAnimationIn"

                  >
                    Мы ценим уникальность каждого кандидата и предоставляем индивидуальное сопровождение на всем пути к вашей успешной карьере за границей.

                  </p>
                </div>
              </div>
              <div className="u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-md u-align-left-xl u-container-style u-image u-list-item u-repeater-item u-shading u-video-cover u-image-4">
                <div className="u-container-layout u-similar-container u-valign-top-xl u-container-layout-4">
                  <span
                    className="u-align-center-lg u-align-center-md u-align-center-sm u-align-center-xs u-icon u-icon-circle u-opacity u-opacity-70 u-palette-1-light-3 u-text-palette-1-base u-icon-4"
                    data-animation-name="customAnimationIn"
                    data-animation-duration={1500}
                    data-animation-delay={500}
                  >
                    <svg
                      className="u-svg-link"
                      preserveAspectRatio="xMidYMin slice"
                      viewBox="0 0 512 512"
                      style={{}}
                    >
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="#svg-5ea9"
                      />
                    </svg>
                    <svg
                      className="u-svg-content"
                      viewBox="0 0 512 512"
                      x="0px"
                      y="0px"
                      id="svg-5ea9"
                      style={{ enableBackground: "new 0 0 512 512" }}
                    >
                      <g>
                        <g>
                          <path d="M269.145,240.999h-26.292c-13.474,0-24.435-10.961-24.435-24.434c0-13.474,10.962-24.437,24.435-24.437h52.583    c8.284,0,15-6.716,15-15s-6.716-15-15-15h-24.437v-24.438c0-8.285-6.716-15.001-15-15.001c-8.284,0-15,6.716-15,15v24.484    c-29.159,0.983-52.581,24.995-52.581,54.39c0,30.015,24.42,54.434,54.435,54.434h26.292c13.475,0,24.438,10.963,24.438,24.439    c0,13.474-10.963,24.436-24.438,24.436h-52.582c-8.284,0-15,6.716-15,15s6.716,15,15,15h24.436v24.437c0,8.284,6.716,15,15,15    c8.284,0,15-6.716,15-15v-24.483c29.16-0.982,52.584-24.994,52.584-54.389C323.582,265.419,299.161,240.999,269.145,240.999z"></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M442.762,321.127c-7.59-3.318-16.434,0.148-19.751,7.739c-29.018,66.405-94.573,109.313-167.014,109.313    c-89.499,0-165.35-66.392-179.719-152.472l39.786,26.584c6.888,4.603,16.203,2.75,20.806-4.139    c4.603-6.888,2.749-16.203-4.139-20.806l-65.583-43.821c-3.308-2.21-7.358-3.013-11.26-2.24c-3.902,0.776-7.335,3.071-9.546,6.379    L2.529,313.247c-4.602,6.889-2.748,16.204,4.14,20.806c2.56,1.711,5.455,2.529,8.319,2.529c4.841,0,9.595-2.341,12.486-6.668    l20.692-30.972c8.42,41.121,28.882,78.841,59.51,108.786c39.874,38.983,92.548,60.453,148.322,60.453    c84.364,0,160.712-49.969,194.503-127.302C453.819,333.287,450.354,324.444,442.762,321.127z"></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M505.333,177.949c-6.89-4.602-16.204-2.749-20.806,4.139l-20.695,30.971c-8.42-41.122-28.882-78.842-59.51-108.787    c-39.874-38.983-92.549-60.453-148.323-60.453c-84.363,0-160.711,49.97-194.503,127.302c-3.317,7.591,0.148,16.434,7.739,19.751    s16.434-0.148,19.752-7.739c29.017-66.404,94.573-109.314,167.013-109.314c89.498,0,165.349,66.393,179.72,152.472l-39.786-26.582    c-6.889-4.604-16.203-2.749-20.806,4.139c-4.602,6.889-2.749,16.204,4.14,20.806l65.581,43.818    c2.56,1.711,5.455,2.529,8.319,2.529c4.842,0,9.594-2.34,12.485-6.668l43.818-65.577    C514.073,191.866,512.22,182.551,505.333,177.949z"></path>
                        </g>
                      </g>
                    </svg>
                  </span>
                  <h3
                    className="u-align-center-lg u-align-center-md u-align-center-sm u-align-center-xs u-heading-font u-text u-text-9"
                    data-animation-name="customAnimationIn"
                    data-animation-duration={1250}
                    data-animation-delay={500}
                  >
                    КОМПЛЕКСНАЯ ПОМОЩЬ НА ВСЕХ ЭТАПАХ
                  </h3>
                  <p
                    className="u-text u-text-10"
                    data-animation-name="customAnimationIn"
                    data-animation-duration={1500}
                    data-animation-delay={500}
                  >
 Наша цель - облегчить весь процесс трудоустройства и сделать его максимально эффективным для вас.                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="u-grey-15 u-section-3 " id="carousel_d29c">
        <div className="u-clearfix u-sheet u-valign-middle-lg u-sheet-1 container">
          <div className="u-clearfix u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-gutter-0 u-layout-wrap u-layout-wrap-1">
            <div className="u-gutter-0 u-layout">
              <div className="u-layout-col">
                <div className="u-size-60">
                  <div className="u-layout-row">
                    <div
                      className="u-container-style u-image u-layout-cell u-size-20 u-image-1"
                      data-image-width={810}
                      data-image-height={1080}
                    >
                      <div className="u-container-layout u-container-layout-1">
                        <div className="u-container-style u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-group u-white u-group-1">
                          <div className="u-container-layout u-valign-middle-lg u-valign-middle-xl u-container-layout-2">
                            <h6 className="u-custom-font u-text u-text-default-lg u-text-default-xl u-text-font u-text-1">
                              01
                            </h6>
                            <p className="u-text u-text-2">
                              {" "}
                              Легальное трудоустройство в Европе с проверенными
                              работодателями
                              <br />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="u-container-style u-image u-layout-cell u-size-20 u-image-2"
                      data-image-width={1620}
                      data-image-height={1080}
                    >
                      <div className="u-container-layout u-valign-top u-container-layout-3" />
                    </div>
                    <div className="u-container-style u-grey-5 u-layout-cell u-shape-rectangle u-size-20 u-layout-cell-3">
                      <div className="u-container-layout u-container-layout-4">
                        <div className="u-container-style u-group u-palette-1-base u-group-2">
                          <div className="u-container-layout u-container-layout-5">
                            <h6 className="u-custom-font u-text u-text-default-lg u-text-default-md u-text-default-xl u-text-font u-text-3">
                              02
                            </h6>
                            <p className="u-text u-text-4">
                              {" "}
                              TOP-Persona – ваш партнер в обучении и
                              трудоустройстве в Германии и других странах Европы
                              <br />
                            </p>
                          </div>
                        </div>
                        <h5 className="u-text u-text-5">
                          {" "}
                          Безопасное трудоустройство
                        </h5>
                        <p className="u-text u-text-6 ">
                          TOP-Persona – компания, которая помогает людям
                          легально устроиться на работу в Европе и обеспечить
                          свою успешную карьеру
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div  id="about"></div>
        </div>
      </div>

      <section style={{ backgroundColor: "#d9d9d9" }}>
        <div className="container ">
          <div className="row ">
            <div className="col-lg-6">
              <div className="u-container-layout u-container-layout-1">
                <h3>О компании TOP-Persona</h3>
                <p className="u-text u-text-default u-text-4">
                  Компания "TOP-Persona" официально и легально трудоустраивает
                  граждан Кыргызской Республики в Европе, согласно лицензии №
                  000 937 от Информационно-Консультационного центра
                  Государственной службы Миграции при Правительстве Кыргызской
                  Республики.
                </p>
                <p className="u-text u-text-default u-text-4">
                  Легально трудоустраиваем в Германии, Польше, Латвии и Литве с
                  официального согласия европейского работодателя. Стоимость
                  всех расходов для выезда за рубеж обговариваются в нашем офисе
                  по адресу:
                </p>
                <p className="u-text u-text-default u-text-4">
                  Кыргызская Республика, г. Бишкек, ул. Исанова № 79 (6 этаж 607
                  офис). Для ориентира как нас найти - это между ул. Киевская и
                  ул. Токтогула возле "Бакай Банка VIP". Тел: +996 556 305 310;
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <>
                {/* <noscript
                  style={{ color: "#c00", fontSize: 16, fontWeight: "bold" }}
                >
                  Виджет карты использует JavaScript. Включите его в настройках
                  вашего браузера.
                </noscript> */}
                <div className="YMaps_container">
                  <YMaps>
                    <div>
                      <Map
                        defaultState={{
                          center: [42.874238, 74.592194],
                          zoom: 17,
                        }}
                        style={{
                          width: "100%",
                          height: "380px",
                          borderRadius: "10px",
                          overflow: "hidden",
                        }}
                      >
                        <Placemark geometry={[42.874238, 74.592194]} />
                        <ZoomControl options={{ float: "right" }} />
                        <div className="YMaps_border">
                          <a
                            className="dg-widget-link"
                            style={{ marginLeft: "15px" }}
                            href="http://2gis.kg/bishkek/firm/70000001067046790/center/74.59200739860536,42.874525267183145/zoom/16?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap"
                          >
                            Посмотреть на карте Бишкека
                          </a>
                        </div>
                      </Map>{" "}
                    </div>
                  </YMaps>
                </div>
                <div className="dg-widget-link mt-4">
                  <a href="http://2gis.kg/bishkek/center/74.592005,42.874242/zoom/16/routeTab/rsType/bus/to/74.592005,42.874242╎Топ-Персона, агентство по трудоустройству?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=route">
                    Найти проезд до Топ-Персона, агентство по трудоустройству
                  </a>
                </div>
              </>
            </div>
          </div>
        </div>
      </section>

      <section
        className="u-clearfix u-palette-1-base u-section-5"
        id="carousel_ee74"
      >
        <div className="u-expanded-width u-grey-15 u-shape u-shape-rectangle u-shape-1 " />
        <img
          src={img2}
          alt=""
          className="u-image u-image-round u-radius-10 u-image-1"
          data-image-width={1127}
          data-image-height={920}
        />
        <div className="u-align-left u-container-style u-custom-color-3 u-group u-radius-10 u-shape-round u-group-1">
          <div className="u-container-layout u-valign-middle u-container-layout-1">
            <h3 className="u-text u-text-1">
              {" "}
              ваш персональный консультант по трудоустройству
            </h3>
            <a
              href="."
              className="u-active-black u-border-none u-btn u-btn-round u-button-style u-custom-color-1 u-hover-black u-radius-10 u-btn-1"
            >
              Ознакомиться
            </a>
          </div>
        </div>
      </section>

      <section
        className="u-align-center u-clearfix u-palette-1-base u-section-6"
        id="carousel_6e3c"
      >
        <div className="u-clearfix u-sheet u-valign-middle-xl u-sheet-1 container">
          <h2 className="u-text u-text-default u-text-1">
            {" "}
            TOP-Persona: надежный партнер в поиске работы
          </h2>
          <p className="u-text u-text-2">
          Наши услуги охватывают всю процедуру трудоустройства, включая помощь с составлением резюме, подготовкой к собеседованию, оформлением всех необходимых документов и многое другое. Мы стремимся сделать процесс трудоустройства простым и эффективным для каждого нашего клиента.
          </p>
          <div className="u-expanded-width u-list u-list-1">
            <div className="u-repeater u-repeater-1">
              <div className="u-align-left u-container-style u-list-item u-repeater-item u-white u-list-item-1">
                <div className="u-container-layout u-similar-container u-container-layout-1">
                  <span className="u-custom-color-1 u-file-icon u-icon u-icon-circle u-icon-1">
                    <img src={img3} alt="" />
                  </span>
                  <h4 className="u-text u-text-5"> консультации </h4>
                  <p className="u-text u-text-4">
                    {" "}
                    Консультации и поддержка на каждом этапе поиска работы
                  </p>
                </div>
              </div>
              <div className="u-align-left u-container-style u-list-item u-repeater-item u-white u-list-item-2">
                <div className="u-container-layout u-similar-container u-container-layout-2">
                  <span className="u-custom-color-1 u-file-icon u-icon u-icon-circle u-icon-2">
                    <img src={img4} alt="" />
                  </span>
                  <h4 className="u-text u-text-5"> надежный </h4>
                  <p className="u-text u-text-6">
                    {" "}
                    &nbsp;надежный партнер на пути к вашей успешной карьере
                  </p>
                </div>
              </div>
              <div className="u-align-left u-container-style u-list-item u-repeater-item u-white u-list-item-3">
                <div className="u-container-layout u-similar-container u-container-layout-3">
                  <span className="u-custom-color-1 u-file-icon u-icon u-icon-circle u-icon-3">
                    <img src={img4} alt="" />
                  </span>
                  <h4 className="u-text u-text-7"> наша компания</h4>
                  <p className="u-text u-text-8">
                    {" "}
                    наша компания гордится своими успехами в трудоустройстве
                    людей – доверьтесь нам и мы поможем и вам
                  </p>
                </div>
              </div>
              <div className="u-align-left u-container-style u-list-item u-repeater-item u-white u-list-item-4">
                <div className="u-container-layout u-similar-container u-container-layout-4">
                  <span className="u-custom-color-1 u-file-icon u-icon u-icon-circle u-icon-4">
                    <img src={img4} alt="" />
                  </span>
                  <h4 className="u-text u-text-9"> помогаем людям</h4>
                  <p className="u-text u-text-10">
                    {" "}
                    TOP-Persona – компания, которая действительно помогает людям
                    найти работу и сделать успешную карьеру
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="u-clearfix u-section-7" id="carousel_501f">
        <div className="u-expanded-width u-palette-1-base u-shape u-shape-rectangle u-shape-1" />
        <div className="u-clearfix u-layout-wrap u-layout-wrap-1">
          <div className="u-layout">
            <div className="u-layout-col">
              <div className="u-size-30">
                <div className="u-layout-row">
                  <div className="u-container-style u-layout-cell u-left-cell u-right-cell u-size-60 u-layout-cell-1">
                    <div className="u-container-layout u-container-layout-1">
                      <img
                        className="u-expanded-height-md u-expanded-height-sm u-expanded-height-xs u-image u-image-default u-image-1 rounded-lg"
                        src={img5}
                        alt='img'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="u-size-30">
                <div className="u-layout-row">
                  <div className="u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-2">
                    <div className="u-container-layout u-container-layout-2">
                      <img
                        className="u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-image u-image-default u-image-2 rounded-lg"
                        src={img7}
                        alt='img'
                      />
                      <h3 className="u-align-left u-text u-text-default-xl u-text-1">
                        Поиск работы – это наша работа{" "}
                      </h3>
                      <p className="u-text u-text-2">
                        Наша компания также предлагает своим клиентам полное
                        сопровождение на всех этапах процесса трудоустройства,
                        начиная с подготовки документов и заканчивая адаптацией
                        в новой стране. Мы предоставляем следующие услуги:
                        Подбор вакансий в соответствии с квалификацией и опытом
                        работы клиента
                      </p>
                      <Link
                        to="/vacancies"
                        className="u-border-2 u-border-palette-1-base u-btn u-button-style u-hover-palette-1-base u-none u-text-active-white u-text-hover-white u-text-palette-1-base u-btn-1"
                      >
                        вакансии
                      </Link>
                    </div>
                  </div>
                  <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-3">
                    <div className="u-container-layout u-container-layout-3">
                      <img
                        className=" u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-image u-image-default u-image-3"
                        src={img6}
                        alt='img'
                      />
                      <p className="u-text u-text-3">
                        Подготовка необходимых документов для трудоустройства
                        Помощь в оформлении визы и других необходимых разрешений
                        на работу Организация переезда и размещения за рубежом
                        Консультации и поддержка на всех этапах трудоустройства
                        и адаптации в новой стране. Мы гарантируем нашим
                        клиентам индивидуальный подход, конфиденциальность и
                        честность во всех наших деловых отношениях. Если у вас
                        есть вопросы о наших услугах, пожалуйста, не стесняйтесь
                        связаться с нами для получения дополнительной
                        информации. Мы будем рады помочь вам достичь успеха в
                        вашей карьере за рубежом!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="u-clearfix u-grey-5 u-section-8" id="carousel_4f1c">
        <div className="u-clearfix u-sheet u-sheet-1 container">
          <img
            className="u-image u-image-default u-image-1"
            src={img9}
            alt=""
            data-image-width={626}
            data-image-height={417}
          />
          {/* <video className="u-image u-image-default u-image-2" controls autoPlay>
            <source src={video1} type="video/mp4" />
          </video> */}
          <img
            className="u-image u-image-default u-image-2"
            src={img8}
            alt=""
            data-image-width={900}
            data-image-height={793}
          />
          <div className="u-align-left u-container-style u-group u-radius-10 u-shape-round u-white u-group-1">
            <div className="u-container-layout u-valign-middle u-container-layout-1">
              <h2 className="u-text u-text-palette-1-base u-text-1">
                {" "}
                С нами уже
              </h2>
              <p className="u-text u-text-2">
                {" "}
                &nbsp; &nbsp; - работают многие довольные клиенты, которые
                получили желаемую работу в лучших
              </p>
              <a
                href="."
                className="u-active-black u-border-none u-btn u-btn-round u-button-style u-custom-color-1 u-hover-black u-radius-10 u-btn-1"
              >
                подробнее
              </a>
            </div>
          </div>
          <div className="u-expanded-width-lg u-expanded-width-sm u-expanded-width-xl u-expanded-width-xs u-list u-list-1">
            <div className="u-repeater u-repeater-1">
              <div className="u-container-style u-list-item u-repeater-item u-shape-rectangle">
                <div className="u-container-layout u-similar-container u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xl u-container-layout-2">
                  <img
                    alt=""
                    className="u-expanded-width u-image u-image-contain u-image-default u-image-3"
                    data-image-width={300}
                    data-image-height={90}
                    src={img10}
                  />
                </div>
              </div>
              <div className="u-container-style u-list-item u-repeater-item u-shape-rectangle">
                <div className="u-container-layout u-similar-container u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xl u-container-layout-3">
                  <img
                    alt=""
                    className="u-expanded-width u-image u-image-contain u-image-default u-image-4"
                    data-image-width={300}
                    data-image-height={90}
                    src={img11}
                  />
                </div>
              </div>
              <div className="u-container-style u-list-item u-repeater-item u-shape-rectangle">
                <div className="u-container-layout u-similar-container u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xl u-container-layout-3">
                  <img
                    alt=""
                    className="u-expanded-width u-image u-image-contain u-image-default u-image-4"
                    data-image-width={300}
                    data-image-height={90}
                    src={img14}
                  />
                </div>
              </div>
              <div className="u-container-style u-list-item u-repeater-item u-shape-rectangle">
                <div className="u-container-layout u-similar-container u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xl u-container-layout-4">
                  <img
                    alt=""
                    className="u-expanded-width u-image u-image-contain u-image-default u-image-5"
                    data-image-width={300}
                    data-image-height={63}
                    src={img12}
                  />
                </div>
              </div>
              <div className="u-container-style u-list-item u-repeater-item u-shape-rectangle">
                <div className="u-container-layout u-similar-container u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xl u-container-layout-5">
                  <img
                    alt=""
                    className="u-expanded-width u-image u-image-contain u-image-default u-image-6"
                    data-image-width={300}
                    data-image-height={39}
                    src={img13}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="u-align-center u-clearfix u-section-9"
        style={{ backgroundColor: "#F2F2F2" }}
      >
        <div
          id="contact"
          className="u-clearfix u-sheet u-sheet-1"

        >
          <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1 ">
            <div
              className=""
              style={{
                paddingBottom: "0",
                paddingLeft: "3rem",
                color: "#478ac9",
              }}
            >
              <h2 className="u-custom-font u-font-montserrat u-text u-text-default u-text-1">
                Наши контакты
              </h2>
            </div>

            <div className="u-layout">
              <div className="u-layout-row">
                <div className="u-align-left u-container-style u-layout-cell u-size-30 u-layout-cell-1 ">
                  <div className="u-container-layout u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-valign-top-lg u-valign-top-xl u-container-layout-1">
                    <h4 className="u-custom-font u-font-montserrat ">
                      Остались вопросы ?<br /> Спросите специалиста!
                    </h4>
                    <div className="u-expanded-width u-form u-form-1">
                      <Form />
                      
                    </div>
                  </div>
                </div>
                <div className="u-container-style u-grey-5 u-layout-cell u-size-30 u-layout-cell-2">
                  <div className="u-container-layout u-valign-top u-container-layout-2">
                    <div className="u-accordion u-expanded-width u-faq u-spacing-20 u-accordion-1">
                      <div className="u-accordion-item">
                        <div
                          className="u-accordion-active u-accordion-pane u-container-style u-accordion-pane-1"
                          aria-labelledby="link-"
                        >
                          <div className="u-container-layout u-container-layout-3">
                            <div className="fr-view u-clearfix u-rich-text u-text">
                              <div className="d-flex ">
                                <div className="d-flex align-items-center">
                                  <p>
                                    <FaMapMarkerAlt
                                      style={{
                                        fontSize: "30px",
                                        margin: "0 20px 0 30px",
                                        color: "#478AC9",
                                      }}
                                    />
                                  </p>
                                </div>
                                <p>
                                  ​Насирдина Исанова 79, офис - 607 (​6 этаж) {" "}
                                  <a
                                    className="dg-widget-link"
                                    style={{ color: "#478AC9" }}
                                    href="http://2gis.kg/bishkek/firm/70000001067046790/center/74.59200739860536,42.874525267183145/zoom/16?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap"
                                  >
                                    2GIS
                                  </a>
                                </p>
                              </div>
                              <div className="d-flex ">
                                <div className="d-flex align-items-center">
                                  <p>
                                    <MdAccessTimeFilled
                                      style={{
                                        fontSize: "30px",
                                        margin: "0 20px 0 30px",
                                        color: "#478AC9",
                                      }}
                                    />
                                  </p>
                                </div>
                                <p>
                                  Режим работы офиса: Понедельник - Пятница
                                  8:30-17:30 Обед: 12:00-13:00 Выходные:
                                  Суббота, Воскресенье
                                </p>
                              </div>
                              <div className="d-flex ">
                                <div className="d-flex align-items-center">
                          
                                  <p>
                                    <GrMail
                                      style={{
                                        fontSize: "30px",
                                        margin: "0 20px 0 30px",
                                        color: "#478AC9",
                                      }}
                                    />
                                  </p>
                                  </div>
                          
                                <p>
                                  <a
                                    href="mailto:info@globus-tour.kg"
                                    style={{ color: "#478AC9" }}
                                  >
                                    info@globus-tour.kg
                                  </a>
                                </p>
                              
                              </div>
                              <div className="d-flex ">
                                <div className="d-flex align-items-center">
                                  <p>
                                    <FaPhoneAlt
                                      style={{
                                        fontSize: "30px",
                                        margin: "0 20px 0 30px",
                                        color: "#478AC9",
                                      }}
                                    />
                                  </p>
                                </div>
                                <p>
                                  Телефон для справок:
                                  <div className="d-flex" style={{"flexDirection": "column"}}>
                                  <a
                                    href="tel:+996556305310"
                                    style={{ color: "#478AC9" }}
                                  >
                                    +996 556 30 53 10
                                  </a>
                                  <a
                                    href="tel:+996556305310"
                                    style={{ color: "#478AC9" }}
                                  >
                                    +996 556 30 53 10
                                  </a>
                                  <a
                                    href="tel:+996556305310"
                                    style={{ color: "#478AC9" }}
                                  >
                                    +996 556 30 53 10
                                  </a>
                                  </div>
                                  
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
