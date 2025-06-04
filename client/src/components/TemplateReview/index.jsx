import React from "react";
import { NavLink } from "react-router-dom";

import ReviewCard from "../ReviewCard/ReviewCard";

import "./templateReview.css";

import philipsBathRoom from "../../images/hostelsFoto/philips/philipsBathRoom.jpg";
import philipsKitchen from "../../images/hostelsFoto/philips/philipsKitchen.jpg";
import philipsMainRoom from "../../images/hostelsFoto/philips/philipsMainRoom.jpg";

import zaraBathRoom from "../../images/hostelsFoto/zara/zaraBathRoom.jpg";
import zaraKitchen from "../../images/hostelsFoto/zara/zaraKitchen.jpg";
import zaraMainRoom from "../../images/hostelsFoto/zara/zaraMainRoom.jpg";

const templateReview = [
  {
    id: 1,
    images: [philipsMainRoom, philipsBathRoom, philipsKitchen],
    name: "Світлана",
    date: "06.04.2024",
    vacancy: "Philps",
    review:
      "Приїхала з коліжанкою, нас зустріли, поселили, через 2 дні вийшли на працю. Працюємо третій тиждень, поки все подобається, вже отримали перший аванс від роботодавця, та плануємо лишатись тут на довгий період",
  },
  {
    id: 2,
    images: [zaraMainRoom, zaraKitchen, zaraBathRoom],
    name: "Ірина",
    date: "06.04.2024",
    vacancy: "Zara",
    review:
      "Співпрацею дуже задоволенa. Умови на роботі точно відповідають опису, а житло просторе та комфортне. Дуже вдячний менеджерам за терпіння та професійність",
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
