import React, { useContext } from "react";

import { VacancyContext } from "../../context/VacancyContext";

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
      <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
        <option value="">Оберіть місто</option>
        {uniqueCities.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </>
  );
};

export default VacancyFilter;
