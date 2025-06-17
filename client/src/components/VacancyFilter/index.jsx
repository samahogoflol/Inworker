import React, { useContext } from "react";

import { VacancyContext } from "../../context/VacancyContext";

import "./style.css";

const VacancyFilter = () => {
  const {
    vacancies,
    filteredVacancies,
    selectedCity,
    setSelectedCity,
    searchText,
    setSearchText,
    selectedContractType,
    setSelectedContractType,
    uniqueCities,
  } = useContext(VacancyContext);

  return (
    <>
      <div className="filter_field">
        <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
          <option value="">Оберіть місто / Всі міста</option>
          {uniqueCities.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
          <option value="">Оберіть місто / Всі міста</option>
          {uniqueCities.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
          <option value="">Оберіть місто / Всі міста</option>
          {uniqueCities.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <button className="clear_filter">Очистити фільтри</button>
      </div>
    </>
  );
};

export default VacancyFilter;
