import React, { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { VacancyContext } from "../../context/VacancyContext/index.jsx";

import { zleceniaContract, oPraciContract } from "../../utils/salary";

import "./style.css";

const VacanciesCards = ({ enablePagination }) => {
  const { data } = useContext(VacancyContext);
  const [visibleCount, setVisibleCount] = useState(6);

  return (
    <>
      <h2 className="vacancy_cards_header">Актуальні вакансії</h2>
      <div className="vacancy_cards_grid">
        {data.slice(0, visibleCount).map((vacancy) => (
          <div key={vacancy._id} className="vacancy_cards_grid_card">
            <div className="single_card">
              <div>
                <img src={`http://localhost:5000${vacancy.img.vacancyFoto}`} alt={vacancy.title} className="single_card_vacancy_img" />
                <div className="single_card_title">
                  <h3>{vacancy.title}</h3>
                </div>
                <div className="single_card_description">
                  <ul className="single_card_description_list">
                    <li>
                      <span className="single_card_span_description">Заробітна плата : </span>
                      {vacancy.salary.salaryPerHour
                        ? vacancy.salary.salaryPerHour
                        : vacancy.contract === "Umowa o pracę"
                        ? oPraciContract.salaryPerMonth
                        : zleceniaContract.salaryPerHour}
                    </li>
                    <li>
                      <span className="single_card_span_description">Графік :</span> {vacancy.workingHours}
                    </li>
                    <li>
                      <span className="single_card_span_description">Трудовий договір :</span> {vacancy.contract}
                    </li>
                    <li>
                      <span className="single_card_span_description">Проживання :</span> {vacancy.hostel}
                    </li>
                    <li>
                      <span className="single_card_span_description">Місто праці :</span> {vacancy.city}
                    </li>
                  </ul>
                </div>
                <Link to={`/vacancies/${vacancy._id}`}>
                  <button className="btn"> Переглянути вакансію </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!enablePagination ? (
        <NavLink end to="/vacancies">
          <button className="vacancies_card_page_btn_see_all_vacancies">Переглянути всі вакансії</button>
        </NavLink>
      ) : null}

      {enablePagination && visibleCount < data.length ? (
        <button onClick={() => setVisibleCount(visibleCount + 6)} className="vacancies_card_page_btn_see_more_vacancies">
          Загрузити ще вакансії
        </button>
      ) : null}
    </>
  );
};

export default VacanciesCards;
