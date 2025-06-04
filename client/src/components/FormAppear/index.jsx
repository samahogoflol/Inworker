import React, { useState, useEffect } from "react";
import { useFormik } from "formik";

import "./formAppear.css";

import imgTest from "../../images/img_test.webp";

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

const FormAppear = () => {
  const [appearForm, setAppearForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAppearForm(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

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
      <div className={`_hideForm ${appearForm ? "popup-overlay" : ""}`} onClick={() => setAppearForm(false)}>
        <button className={`_hideForm ${appearForm ? "close_btn" : ""}`} onClick={() => setAppearForm(false)}></button>
      </div>
      {appearForm && (
        <div className="formAppear">
          <img className="img_form_appear" src={imgTest} alt="Отримати безкоштовну консультацію" />
          <form className="form_appear" onSubmit={formik.handleSubmit} action="#">
            <p className="input_appear_text">Введіть Ваше ім'я</p>
            <input
              className="input_appear"
              type="text"
              name="name"
              placeholder="Світлана"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name ? <div className="error">{formik.errors.name}</div> : null}
            <p className="input_appear_text"> Номер телефону</p>{" "}
            <input
              className="input_appear"
              type="text"
              name="number"
              placeholder="Введіть номер телефону з кодом країни (+380..)"
              value={formik.values.number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.number && formik.touched.number ? <div className="error">{formik.errors.number}</div> : null}
            <button type="submit" className="btn_appear_send">
              Отримати консультацію
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default FormAppear;
