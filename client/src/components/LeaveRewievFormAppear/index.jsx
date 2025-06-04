import React, { useState } from "react";

import "./leaveRewievFormAppear.css";

const LeaveRewievFormAppear = ({ handleClose }) => {
  const [rewievForm, setRewievForm] = useState(true);

  return (
    <>
      <button className="btn_close_rewiev_appear" onClick={handleClose}></button>

      {rewievForm && (
        <div className="container_appear_form">
          <h3>
            Будь ласка, залиште відгук про нашу роботу
            <br /> Ми будемо вдячні кожному
          </h3>
          <form className="rewiev_form_appear" action="">
            <input className="input_appear_rewiev_form" type="text" placeholder="Ваше ім'я" />
            <input className="input_appear_rewiev_form" type="number" placeholder="Номер телефону (+ 380 (50) 500-50-50)" />
            <input className="input_appear_rewiev_form" type="text" placeholder="Назва вакансії" />
            <input className="input_appear_rewiev_form" type="text" placeholder="Вкажіть дату приїзду на вакансію" />
            <textarea rows={8} className="textarea_appear_rewiev_form" placeholder="Текст відгука" />

            <div>
              <p className="select_assessment_rewiev">На скільки оцінюєте вакансію?</p>
              <select>
                <option value="5 зірок" selected>
                  5
                </option>
                <option value="4 зірки">4</option>
                <option value="3 зірки">3</option>
                <option value="2 зірки">2</option>
                <option value="1 зірка">1</option>
              </select>
            </div>
            <button className="btn_send_rewiev">Відправити відгук</button>
          </form>
        </div>
      )}
    </>
  );
};

export default LeaveRewievFormAppear;
