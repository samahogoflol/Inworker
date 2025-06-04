import React from "react";
import { Formik } from "formik";
import { useFormik } from "formik";

import "./form.css";

const validate = (values) => {
  const nameRegex = /^[a-zA-Zа-яА-ЯіїєІЇЄґҐ'’\- ]+$/;
  const phoneRegex = /^\d{10,15}$/;
  const hasLettersRegex = /[a-zA-Zа-яА-ЯіїєІЇЄґҐ]/;

  const errors = {};

  if (!values.name) {
    errors.name = "'Обов'язкове поле!";
  } else if (values.name.length < 2) {
    errors.name = "Введіть корректне ім'я";
  } else if (!nameRegex.test(values.name)) {
    errors.name = "Ім'я може містити лише літери, пробіли, апостроф або дефіс";
  } else if (!hasLettersRegex.test(values.name)) {
    errors.name = "Ім'я має містити хоча б одну літеру";
  }

  if (!values.number) {
    errors.number = "'Обов'язкове поле!";
  } else if (!phoneRegex.test(values.number)) {
    errors.number = "Введіть корректний номер телефону";
  }

  return errors;
};

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
    },
    validate,
    onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
  });

  return (
    <>
      <h2 className="free_consultation">Безкоштовна консультація</h2>
      <div className="formCard" action="#">
        <div className="left_side">
          <h3 className="form_text_left">Заповніть заявку, та наші менеджери якнайшвидше зв’яжуться з Вами</h3>
          <h4 className="form_text_left">
            Ми проведемо для Вас безкоштовну консультацію, розповімо більш детально про роботу, та з радістю дамо відповідь на всі Ваші
            запитання, що до роботи в Польщі
          </h4>
          <button className="btn_phone">
            <a className="form_phone" href="tel:+380664844563">
              +380664844563 - Анатолій
            </a>
          </button>
        </div>
        <div className="right_side">
          <form className="form" onSubmit={formik.handleSubmit} action="#">
            <p className="text_over_btn">Введіть Ваше ім'я</p>
            <input
              className="input_name"
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name ? <div className="error">{formik.errors.name}</div> : null}
            <p className="text_over_btn1">Номер телефону</p>
            //{" "}
            <input
              className="input_phone"
              type="text"
              name="number"
              placeholder="Введіть номер телефону з кодом країни (+380..)"
              value={formik.values.number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.number && formik.touched.number ? <div className="error">{formik.errors.number}</div> : null}
            <button type="submit" className="btn_send">
              Отримати консультацію
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
