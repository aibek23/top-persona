import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [captchaValue, setCaptchaValue] = useState("");
  const [userInput, setUserInput] = useState("");
  const [randomStyle, setRandomStyle] = useState({});
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+996");
  const [message, setMessage] = useState("");

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateRandomString = (length) => {
    const characters = "0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const generateCaptcha = () => {
    // Generate a random 4-character captcha value
    const captchaValue = generateRandomString(4);
    setCaptchaValue(captchaValue);
    setRandomStyle(grnrtateStyle());
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const doSubmit = async  (e)  => {
    e.preventDefault();
    if (userInput === captchaValue) {
      const phoneNumberClickable = `<a href="tel:${phone}">${phone}</a>`;
    try {
      await axios.post(
        `https://api.telegram.org/bot6005637920:AAG-kMMINg4TsWDRCXq3x36IidPD-PmOOOU/sendMessage`,
        {
          chat_id: '-816444731', // Замените <YOUR_CHAT_ID> на идентификатор чата, куда нужно отправить сообщение. Это может быть идентификатор вашего бота или ваш личный идентификатор чата.
          text: `Сообщение от: ${name}\nномер телефона: <a href="tel:${phone}">${phone}</a>\nСообщение: ${message}`,
          parse_mode: 'HTML'
        }
      );
    // await axios.post(
    //     `https://api.telegram.org/bot1622510700:AAEIVv9yHhuuXq2eSztSyH5GkZtEyJDAKAY/sendMessage?chat_id={-1001260229168}&text={${name}}`
    //   );  
      // Обработка успешной отправки
      toast(`Сообщение отправлено!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setMessage('');
      setName('');
    } catch (error) {
        toast.error(`не успешно! ${error}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
    }
      // Your success logic here
    } else {
      toast.error("не успешно! значение капчи неверно", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      generateCaptcha();
      setUserInput("");
    }
  };

  const grnrtateStyle = () => {
    const fontFamilyOptions = [
      "Arial",
      "Helvetica",
      "Courier",
      "Monospace",
      "cursive",
    ];
    const fontSizeOptions = ["20px", "25px", "30px"];
    const fontWeightOptions = ["bold", "normal"];

    const styles = [];
    for (let i = 0; i < 4; i++) {
      const randomFontFamily =
        fontFamilyOptions[Math.floor(Math.random() * fontFamilyOptions.length)];
      const randomFontSize =
        fontSizeOptions[Math.floor(Math.random() * fontSizeOptions.length)];
      const randomFontWeight =
        fontWeightOptions[Math.floor(Math.random() * fontWeightOptions.length)];

      styles.push({
        fontFamily: randomFontFamily,
        fontSize: randomFontSize,
        fontWeight: randomFontWeight,
      });
    }
    return styles;
  };
  const handlePhoneChange = (inputValue) => {
    // Remove all characters except for digits, "+", "(", ")", spaces, and dashes
    const filteredValue = inputValue.replace(/[^\+0-9\-\(\)\s]/g, "");
    setPhone(filteredValue);
  };
  return (
    <>
      <form className="form-inline w-100">
        <div className="form-group">
          <label htmlFor="name">ваше имя</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">ваш телефон</label>
          <input
            type="number tel" // Тип "tel" для поля ввода телефона
            className="form-control"
            id="phone"
            name="phone" // Атрибут "name" для поля ввода телефона
            value={phone} // Значение телефона из состояния (например, this.state.phone)
            onChange={(e) => handlePhoneChange(e.target.value)} // Обработчик изменения значения

            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Сообщение</label>
          <textarea
            className="form-control"
            id="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="d-flex w-100 mt-4 container-lg">
          <div
            className="mr-2 w-20"
            style={{ userSelect: "none", marginRight: "10px" }}
          >
            <span style={randomStyle[0]}>{captchaValue[0]}</span>
            <span style={randomStyle[1]}>{captchaValue[1]}</span>
            <span style={randomStyle[2]}>{captchaValue[2]}</span>
            <span style={randomStyle[3]}>{captchaValue[3]}</span>
          </div>
          <div className="ml-5 ">
            <input
              className="form-control"
              autoComplete="off"
              placeholder="введите число слева"
              value={userInput}
              onChange={handleInputChange}
            />
          </div>
          <div className="mr-2 w-40 ">
            <button
              type="button"
              className=" u-active-black u-border-none u-btn u-btn-round u-button-style u-custom-color-1 u-hover-black u-radius-10 u-btn-1"
              onClick={doSubmit}
              style={{ width: "100%", margin: "0 0 0 10px " }}
            >
              отправить
            </button>
          </div>
        </div>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Form;
