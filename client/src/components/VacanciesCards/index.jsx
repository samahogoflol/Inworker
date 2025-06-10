import React, { useState, useContext, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { VacancyContext } from "../VacancyContext";

import { zleceniaContract, oPraciContract } from "../../salaryConstants/index";

import getAllVacancies from "../../services/vacancyFromDB";

import "./vacanciesCards.css";

const VacanciesCards = ({ enablePagination }) => {
  const [allVacancies, setAllVacancies] = useState([]);

  useEffect(() => {
    getAllVacancies().then((res) => {
      setAllVacancies(res);
    });
  }, []);

  return (
    <>
      <div className="vacancy_grid">
        {allVacancies.map((vacancy) => (
          <div key={vacancy._id} className="vacancy">
            <div className="card">
              <div className="img">
                <img src={`http://localhost:5000/uploads/1749458432489-577475245.jpg`} alt={vacancy.title} className="vacancy-image" />
                <div className="title">
                  <h3>{vacancy.title}</h3>
                </div>
                <div className="card_discription">
                  <ul className="discription_list">
                    <li>
                      <span className="span_discroption">Заробітна плата : </span>
                      {vacancy.contract === "Umowa o pracę" ? oPraciContract.salaryPerMonth : zleceniaContract.salaryPerHour}
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

      {/* {enablePagination ? (
        <button onClick={downloadMoreVacancies} className="see_more_vacancies">
          Загрузити ще вакансії
        </button>
      ) : (
        <NavLink end to="/vacancies">
          <button className="btn_look_all_vacancion">Переглянути всі вакансії</button>
        </NavLink>
      )} */}
    </>
  );
};

export default VacanciesCards;
