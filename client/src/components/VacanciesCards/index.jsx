import React, { useState, useContext, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { VacancyContext } from "../VacancyContext";

import TestApi from "../testAPI";

import "./vacanciesCards.css";

const VacanciesCards = ({ enablePagination }) => {
  const [visibleVacancies, setVisibleVacancies] = useState(6);
  const { vacancies, filteredVacancies } = useContext(VacancyContext);

  const vacanciesToRender = () => {
    return filteredVacancies.length > 0 ? filteredVacancies : vacancies;
  };

  function downloadMoreVacancies() {
    setVisibleVacancies((prev) => prev + 6);
  }

  return (
    <>
      <TestApi></TestApi>
      <div className="vacancy_grid">
        {vacanciesToRender()
          .slice(0, visibleVacancies)
          .map((vacancy) => (
            <div key={vacancy.id} className="vacancy">
              <div className="card">
                <div className="img">
                  <img src={vacancy.img.vacancyFoto} alt={vacancy.title} className="vacancy-image" />
                </div>
                <div className="title">
                  <h3>{vacancy.title}</h3>
                </div>
                <div className="card_discription">
                  <ul className="discription_list">
                    <li>
                      <span className="span_discroption">Заробітна плата : </span>
                      {vacancy.contract === "Umowa o pracę" ? vacancy.salary.salaryPerMonth : vacancy.salary.salaryPerHour}
                    </li>
                    <li>
                      <span className="span_discroption">Графік :</span> {vacancy.workingHours}
                    </li>
                    <li>
                      <span className="span_discroption">Трудовий договір :</span> {vacancy.contract}
                    </li>
                    <li>
                      <span className="span_discroption">Проживання :</span> {vacancy.hostel}
                    </li>
                    <li>
                      <span className="span_discroption">Місто праці :</span> {vacancy.city}
                    </li>
                  </ul>
                </div>
                <Link to={`/vacancies/${vacancy.id}`}>
                  <button className="btn">Переглянути вакансію</button>
                </Link>
              </div>
            </div>
          ))}
      </div>
      {enablePagination ? (
        <button onClick={downloadMoreVacancies} className="see_more_vacancies">
          Загрузити ще вакансії
        </button>
      ) : (
        <NavLink end to="/vacancies">
          <button className="btn_look_all_vacancion">Переглянути всі вакансії</button>
        </NavLink>
      )}
    </>
  );
};

export default VacanciesCards;
