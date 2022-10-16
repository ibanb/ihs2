import { useState } from "react";
import emailjs from '@emailjs/browser';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faRectangleXmark } from "@fortawesome/free-regular-svg-icons";


import "../styles/AskQuestion.css";

export const AskQuestion = () => {
  const [status, setStatus] = useState("");


  const placeList = [
    { id: 1, name: "ГудЛандия Лыткарино" },
    { id: 2, name: "ГудЛандия Серпухов" },
    { id: 3, name: "ГудЛандия Жуковский" },
    { id: 4, name: "Norway Park Барвиха" },
    { id: 5, name: "Norway Park Красногорск" },
    { id: 6, name: "Norway Park Мега Дыбенко" },
    { id: 7, name: "Мадагаскар Junior" }
  ];



  const feedBackForm = (e) => {
    e.preventDefault();

    const templateId = {
      "ГудЛандия Лыткарино": 'template_963gxrv',
      "ГудЛандия Жуковский": 'template_y29diej',
    };

    const currentTemplate = document.querySelector('select').value;
    console.log(templateId[currentTemplate]);

    setStatus("loading");

    emailjs.sendForm(`ibonshreder@gmail.com`, templateId[currentTemplate], e.target, `f3ZYDEtBWiYWUpJs7`)
    .then((result) => {
      setStatus("success");
      console.log(result.text);
    })
    .catch((error) => {
      setStatus("error")
      console.log(error);
    })
  }



  return (
    <>
      <div className="feedBackFromUsers">
        {status === "" ? (
          <form className="askQuestion" onSubmit={feedBackForm}>
            <div className="userName columnElements">
              <label htmlFor="name">Имя</label>
              <input type="text" required
                placeholder="Введите имя" id="name"
                name="to_name" />
            </div>

            <div className="userEmail columnElements">
              <label htmlFor="email">Почта</label>
              <input type="mail" required placeholder="Введите вашу почту" name="user_email" id="email" />
            </div>

            <div className="placeSelector columnElements">
              <label htmlFor="selectPlace">Выбрать место</label>
              <select name="place" id="selectPlace" required>
                {placeList.map(places => (
                  <option key={places.id} value={places.name}>{places.name}</option>
                ))}
              </select>
            </div>

            <div className="userMessage columnElements">
              <label htmlFor="userMessage">Сообщение</label>
              <textarea name="message" id="userMessage" cols="30" rows="10" required placeholder='Хочу получить бонус'></textarea>
            </div>

            <div className="sendButton">
              <button type="submit">Отправить</button>
            </div>
          </form>
        ) : null}

        {status === "loading" ? (
          <div className="loading">
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            <p>Отправка сообщения</p>
          </div>
        ) : null}

        {status === "success" ? (
          <div className="successFullMessage">
            <div className="icon_ready">
              <FontAwesomeIcon icon={faCheck} className="checkData" />
            </div>
            <p className="message">
              Мы получили ваше сообщение и ответим вам в ближайщее время
            </p>
          </div>
        ) : null}

        {status === "error" ? (
          <div className="errorMessage">
            <div className="icon_ready">
              <FontAwesomeIcon icon={faRectangleXmark} className="checkError" />
            </div>
            <div className="error_text"><p>Сообщение не доставлено... </p></div>
            <button onClick={() => setStatus("")}>Повторить</button>
          </div>
        ) : null}
      </div>
    </>
  );
};
