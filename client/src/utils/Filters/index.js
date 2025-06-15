import React, { useContext } from "react";
import { VacancyContext } from "../../context/VacancyContext";

import VacanciesCards from "../../components/VacanciesCards";

const FiltersComponent = () => {
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

};

export default FiltersComponent;
