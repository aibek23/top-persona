import React from 'react';
import img10 from "../img/507bfe31d93ac068001f2064e6d8bd14-min.jpg";
import img11 from "../img/1674649320_top-fon-com-p-nemetskii-fon-dlya-prezentatsii-101.jpg";
import img12 from "../img/0920afe67d667cb16763556276586015.jpg";
import img13 from "../img/FRebMCiWYAAbFK2.jpg";
const Prices = () => {
  return (
    <div >
    <div className="container ">
 
      <div className="">
            <h2
            style={{marginTop:"0px",paddingTop:"3rem"}}
            >
              Условия трудоустройства: 
            </h2>
      </div>
      <div className="row mt-5 pb-5">

      {/* <div className="u-expanded-width-lg u-expanded-width-sm u-expanded-width-xl u-expanded-width-xs u-list u-list-1">
            <div className="u-repeater u-repeater-1">

              <div className="u-container-style u-list-item u-repeater-item u-shape-rectangle">
                <div className="u-container-layout u-similar-container u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xl u-container-layout-3">
                  <img
                    alt=""
                    className="u-expanded-width u-image u-image-contain u-image-default u-image-4 p-3 rounded-lg"
                    src={img11}
                  />
                </div>
              </div>
              <div className="u-container-style u-list-item u-repeater-item u-shape-rectangle">
                <div className="u-container-layout u-similar-container u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xl u-container-layout-4">
                  <img
                    alt=""
                    className="u-expanded-width u-image u-image-contain u-image-default u-image-5 p-3 rounded-lg"
                    src={img12}
                  />
                </div>
              </div>
              <div className="u-container-style u-list-item u-repeater-item u-shape-rectangle">
                <div className="u-container-layout u-similar-container u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xl u-container-layout-5">
                  <img
                    alt=""
                    className="u-expanded-width u-image u-image-contain u-image-default u-image-6 p-3 rounded-lg"

                    src={img13}
                  />
                </div>
              </div>
            </div>
          </div> */}
       
        <div className='col-md-4 mb-3'>
        <h3>Германия <img src={img11}    style={{ objectFit: "cover", width: "45px", height: "100%" }} /></h3>
          <ul>
            <li>Зарплата работника в месяц (евро) от 2500€ до 4150€ ≈ <span style={{color:'red'}}>402 550сом;</span></li>
            <li>Срок трудового контракта: от 12 месяцев и больше;</li>
            <li>необходима знания немецкого языка от  <span style={{color:'red'}}>А2</span> и наличие диплома;</li>
            <li>Возраст кандидата на работу: от 18 до 45 лет;</li>
            <li>Срок оформления документов: 2-3-4 месяца;</li>
            <li>расходы на оформление: <span style={{color:'red'}}> 1000  евро (€)</span></li>
          </ul>
        </div>
        <div className='col-md-4'>
        <h3> Польша <img src={img12}    style={{ objectFit: "cover", width: "45px", height: "100%" }} /></h3>
          <ul>
            <li>Зарплата работника в месяц (евро) от 850€ до 1100€ ≈ <span style={{color:'red'}}>106 700сом</span>;</li>
            <li>Срок трудового контракта: от 12 месяцев;</li>
            <li>необходима знания русского языка ;</li>
            <li>Возраст кандидата на работу: от 18 до 45 лет;</li>
            <li>Срок оформления документов: 2-3-4 месяца;</li>
            <li>расходы на оформление: <span style={{color:'red'}}>575  евро (€)</span></li>
          </ul>
        </div>
        <div className='col-md-4'>
        <h3>Литва <img src={img13}    style={{ objectFit: "cover", width: "45px", height: "100%" }} /></h3>
          <ul>
            <li>Зарплата работника в месяц (евро) от 800€ до 1100€  ≈ <span style={{color:'red'}}>106 700сом</span>;</li>
            <li>Срок трудового контракта: от 12 месяцев;</li>
            <li>необходима знания русского языка  ;</li>
            <li>Возраст кандидата на работу: от 18 до 45 лет;</li>
            <li>Срок оформления документов: 2-3-4 месяца;</li>
            <li>расходы на оформление: <span style={{color:'red'}}>500 евро (€)</span></li>
          </ul>
        </div>
    
   
        <div className="col-md-6">
   
          <h3 style={{color:"#D78059"}}>В стоимость входит:</h3>
          <ul>
            <li>Консультация в офисе, индивидуальный подход и рассмотрение заявки кандидата;</li>
            <li>Регистрационный сбор от кандидата на подбор вакансии;</li>
            <li>Отправка всех необходимых документов на оформление приглашения и трудового договора с кандидатом;</li>
            <li>Проведение собеседования с переводчиком и работодателем в Европе;</li>
            <li>Оплата государственной пошлины за кандидата в госорганах на разрешение на работу;</li>
            <li>DHL - служба экспресс-доставки оригинального пакета документов: приглашение, трудовой контракт, разрешительные документы от работодателя;</li>
            <li>Визовое сопровождение и оформление:</li>
            <ul>
              <li>Запись (термин) в Посольство/консульство;</li>
              <li>Мониторинг и информационная помощь по сбору и оформлению документов;</li>
              <li>Заполнение анкеты онлайн на сайте Посольства/консульства;</li>
            </ul>
            <li>До вылета в Германию: Подбор авиабилетов и инструкция по поведению в стране пребывания, какие документы и персональные вещи взять с собой и т.п.;</li>
            <li>После вылета в Европу: информационное сопровождение по пребыванию в Европе, советы о том, как сэкономить, помощь в открытии счета в банке, первоначальная помощь в адаптации и другие вопросы к нашему координатору в Европе.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h3 style={{color:"#478AC9"}}> В стоимость не входит:</h3>
          <ul>
            <li>Визовый сбор в посольстве (около<span style={{color:'red'}}> 75 евро</span>);</li>
            <li>Страховой медицинский полис на подачу на визу в Посольство Германии (около <span style={{color:'red'}}> 75 евро</span>);</li>
            <li>Справка с банка на сумму <span style={{color:'red'}}> 1500-2500  евро</span> для подачи в Посольство Германии;</li>
            <li>Диплом или сертификат о квалификации и владении навыков для работы (около   <span style={{color:'red'}}>7000-10000 сом</span>через министерство образования);</li>
            <li>Международный авиаперелет в одну сторону после одобрения визы (около <span style={{color:'red'}}>350-400 евро</span>);</li>
            <li>Переводы на немецкий язык и заверение через нотариуса (около  <span style={{color:'red'}}>2500 сом</span>).</li>
          </ul>
        </div>

      </div>
    </div>
    </div>
  );
};

export default Prices;
