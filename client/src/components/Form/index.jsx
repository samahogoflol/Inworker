import React from "react";
import { useFormik, Formik } from "formik";

import "./style.css";

import { contactNumberMenedgerOne } from "../../utils/contacts";

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
      <h2 className="form_header">Безкоштовна консультація</h2>
      <div className="form_card" action="#">
        <section className="form_card_left_side">
          <h3 className="form_card_text_left">Заповніть заявку, та наші менеджери якнайшвидше зв’яжуться з Вами</h3>
          <p className="form_card_text_left">
            Ми проведемо для Вас безкоштовну консультацію, розповімо більш детально про роботу, та з радістю дамо відповідь на всі Ваші
            запитання, що до роботи в Польщі
          </p>
          <button className="form_card_btn_number">
            <a className="form_card_numer_text" href={contactNumberMenedgerOne}>
              +380664844563 - Анатолій
            </a>
          </button>
        </section>
        <div>
          <form className="form_inputs" onSubmit={formik.handleSubmit} action="#">
            <p className="form_inputs_titles">Введіть Ваше ім'я</p>
            <input
              className="form_input_write_name"
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name ? <div className="error">{formik.errors.name}</div> : null}
            <p className="form_inputs_titles">Номер телефону</p>
            <input
              className="forn_input_write_number"
              type="text"
              name="number"
              placeholder="Введіть номер телефону з кодом країни (+380..)"
              value={formik.values.number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.number && formik.touched.number ? <div className="error">{formik.errors.number}</div> : null}
            <button type="submit" className="form_btn_send_form">
              Отримати консультацію
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
