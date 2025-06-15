import React, { useState, useContext, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { VacancyContext } from "../../context/VacancyContext/index.jsx";

import { zleceniaContract, oPraciContract } from "../../utils/SalaryConstants";

import getAllVacancies from "../../api/vacancyFromDB/index.js";

import "./vacanciesCards.css";

const VacanciesCards = ({ enablePagination }) => {
  const { filteredVacancies } = useContext(VacancyContext);
  const [allVacancies, setAllVacancies] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);

  return (
    <>
      <div className="vacancy_grid">
        {filteredVacancies.slice(0, visibleCount).map((vacancy) => (
          <div key={vacancy._id} className="vacancy">
            <div className="card">
              <div className="img">
                <img src={`http://localhost:5000${vacancy.img.vacancyFoto}`} alt={vacancy.title} className="vacancy-image" />
                <div className="title">
                  <h3>{vacancy.title}</h3>
                </div>
                <div className="card_discription">
                  <ul className="discription_list">
                    <li>
                      <span className="span_discroption">Заробітна плата : </span>
                      {vacancy.salary.salaryPerHour
                        ? vacancy.salary.salaryPerHour
                        : vacancy.contract === "Umowa o pracę"
                        ? oPraciContract.salaryPerMonth
                        : zleceniaContract.salaryPerHour}
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
          </div>
        ))}
      </div>

      {!enablePagination ? (
        <NavLink end to="/vacancies">
          <button className="btn_look_all_vacancion">Переглянути всі вакансії</button>
        </NavLink>
      ) : null}

      {enablePagination && visibleCount < filteredVacancies.length ? (
        <button onClick={() => setVisibleCount(visibleCount + 6)} className="see_more_vacancies">
          Загрузити ще вакансії
        </button>
      ) : null}
    </>
  );
};

export default VacanciesCards;
