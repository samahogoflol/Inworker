import React from "react";
import { NavLink } from "react-router-dom";

import ReviewCard from "../ReviewCard/ReviewCard";

import "./templateReview.css";

import philipsHostel1 from "../../images/philips/philipsMainRoom.jpg";
import philipsHostel2 from "../../images/philips/philipsKitchen.jpg";
import philipsHostel3 from "../../images/philips/philipsBathRoom.jpg";

import nikeHostel1 from "../../images/nike/zaraMainRoom.jpg";
import nikeHostel2 from "../../images/nike/zaraKitchen.jpg";
import nikeHostel3 from "../../images/nike/zaraBathRoom.jpg";

const templateReview = [
  {
    id: 1,
    images: [philipsHostel1, philipsHostel2, philipsHostel3],
    name: "Світлана",
    date: "06.10.2024",
    vacancy: "Пакування лампочок",
    review:
      "Вакансія гарна, житло підійшло. Всі магазини поруч, є все комфортне для проживання. Окремо дякуюємо менеджеру Анатолію, який наполягав вибрати саме цю вакансію",
  },
  {
    id: 2,
    images: [nikeHostel1, nikeHostel2, nikeHostel3],
    name: "Ірина",
    date: "23.07.2024",
    vacancy: "Пакування одягу",
    review:
      "Боялась працювати на складах, але все вийшло на багато простіше ніж очікувала. Менеджер розповів про процеси дуже професійно, робота виявилась справді не тяжкою. Раджу цю вакансію",
  },
];

const TemplateReview = () => {
  return (
    <>
      <h2 className="vacancy_review">Відгуки наших кандидатів</h2>
      <ReviewCard templateReview={templateReview} />
      <NavLink end to="vacancies">
        <button className="btn_see_all_reviews">Переглянути всі відгуки</button>
      </NavLink>
    </>
  );
};

export default TemplateReview;
