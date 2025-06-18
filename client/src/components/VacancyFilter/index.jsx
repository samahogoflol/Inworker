import React, { useContext } from "react";

import { VacancyContext } from "../../context/VacancyContext";

import "./style.css";

const VacancyFilter = () => {
  const {
    selectedCity,
    setSelectedCity,
    uniqueCities,
    uniqueContractType,
    selectedContract,
    setSelectedContract,
    searchVacancyName,
    setSearchVacancyName,
  } = useContext(VacancyContext);

  const btnClearFilters = () => {
    setSelectedCity("");
    setSelectedContract("");
    setSearchVacancyName("");
  };

  return (
    <>
      <div className="filter_field">
        <input
          type="text"
          value={searchVacancyName}
          placeholder="Введіть назву вакансії"
          onChange={(e) => setSearchVacancyName(e.target.value)}
        ></input>

        <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
          <option value="">Оберіть місто / Всі міста</option>
          {uniqueCities.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select value={selectedContract} onChange={(e) => setSelectedContract(e.target.value)}>
          <option value="">Трудовий договір</option>
          {uniqueContractType.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <button className="btn_clear_filter" onClick={() => btnClearFilters()}>
          Очистити фільтри
        </button>
      </div>
    </>
  );
};

export default VacancyFilter;
