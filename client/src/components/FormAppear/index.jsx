import React, { useState, useEffect } from "react";
import { FastField, useFormik } from "formik";

import "./style.css";

import imgFormApper from "../../images/img_test.webp";

const validate = (values) => {
  const nameRegex = /^[a-zA-Zа-яА-ЯіїєІЇЄґҐ'’\- ]+$/;
  const phoneRegex = /^\d{10,15}$/;
  const hasLettersRegex = /[a-zA-Zа-яА-ЯіїєІЇЄґҐ]/;

  const errors = {};

  if (!values.name) {
    errors.name = "Обов'язкове поле!";
  } else if (values.name.length < 2) {
    errors.name = "Введіть корректне ім'я";
  } else if (!nameRegex.test(values.name)) {
    errors.name = "Ім'я може містити лише літери, пробіли, апостроф або дефіс";
  } else if (!hasLettersRegex.test(values.name)) {
    errors.name = "Ім'я має містити хоча б одну літеру";
  }

  if (!values.number) {
    errors.number = "Обов'язкове поле!";
  } else if (!phoneRegex.test(values.number)) {
    errors.number = "Введіть корректний номер телефону";
  }

  return errors;
};

const FormAppear = ({ setVisibleForm }) => {
  useEffect(() => {
    setVisibleForm(true);
  }, []);

  useEffect(() => {
    const handleClickEscape = (e) => {
      if (e.key === "Escape") {
        setVisibleForm(false);
      }
    };
    document.addEventListener("keydown", handleClickEscape);

    return () => {
      document.removeEventListener("keydown", handleClickEscape);
    };
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
      <div className={`hide_form ${setVisibleForm ? "form_appear_popup-overlay" : null}`} onClick={() => setVisibleForm(false)}>
        {setVisibleForm ? (
          <button
            className={`hide_form ${setVisibleForm ? "form_appear_close_btn" : null}`}
            onClick={() => setVisibleForm(false)}
          ></button>
        ) : null}
      </div>
      {setVisibleForm && (
        <div className="form_container">
          <img className="form_container_img" src={imgFormApper} alt="Отримати безкоштовну консультацію" />
          <form className="form_appear" onSubmit={formik.handleSubmit} action="#">
            <p>Введіть Ваше ім'я</p>
            <input
              className="form_appear_input"
              type="text"
              name="name"
              placeholder="Світлана"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name ? <div className="__eror_validation"> {formik.errors.name}</div> : null}
            <p> Номер телефону</p>
            <input
              className="form_appear_input"
              type="text"
              name="number"
              placeholder="Введіть номер телефону з кодом країни (+380..)"
              value={formik.values.number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.number && formik.touched.number ? <div className="__eror_validation">{formik.errors.number}</div> : null}
            <button type="submit" className="form_appear_send_form">
              Отримати консультацію
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default FormAppear;
