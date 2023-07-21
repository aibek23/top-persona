import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaTelegram, FaInstagram } from "react-icons/fa";

const Footer = () => {
    const [screenWidth, setScreenWidth] = useState(false);
  
    const handleResize = () => {
      if (window.innerWidth>720) {
        setScreenWidth(false);
      }else{
        setScreenWidth(true);
      }
    };
  
    useEffect(() => {
      // Добавляем слушатель события "resize" для обновления ширины при изменении размера окна
      window.addEventListener("resize", handleResize);
  
      // Удаляем слушатель события при размонтировании компонента, чтобы избежать утечек памяти
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []); 
  return (
    <footer className="footer py-4" style={{ backgroundColor: "#707987" }}>
      <div className="container pt-2">
        <div className="row" style={{ justifyContent: "space-between" }}>
      
          <div className={`col-md-4 d-flex  justify-content-center ${screenWidth?"order-md-1":"order-md-2"}`}>
            <div className="m-2">
              <span style={{ fontSize: "18px", color: "white" }}>  Мы в соцсетях: {" "}</span>
          
            <a href="https://api.whatsapp.com/send?phone=%2B996556305310" target="_blank" rel="noopener noreferrer" className="text-light mx-1 footerIcons">
              <FaWhatsapp style={{ color: "#43C553",backgroundColor:"#fff",borderRadius:"8%",padding:"2px" }} />
            </a>
            <a href="https://t.me/aibekasanakunuulu" target="_blank" rel="noopener noreferrer" className="text-light mx-1 footerIcons">
              <FaTelegram style={{ color: "#26A0DF",backgroundColor:"#fff",borderRadius:"8%",padding:"2px" }} />
            </a>
            <a href="https://www.instagram.com/top_persona.kg" target="_blank" rel="noopener noreferrer" className="text-light mx-1 footerIcons">
              <FaInstagram style={{ color: "#EB01A2",backgroundColor:"#fff",borderRadius:"8%",padding:"2px" }} />
            </a>
            </div>
           
          </div>
          <div className={`col-md-8 d-flex   ${screenWidth?"order-md-2 justify-content-center":"order-md-1 align-items-center"}`}>
            <div className="text-center footerCopyright" style={{ color: "white" }}>
              © 2023 TOP-Persona{" "}
              <span style={{ fontSize: "18px", color: "white" }}> Все права защищены.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;