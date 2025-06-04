import React, { createContext, useState } from "react";
import { allVacancies } from "../../constants";

export const VacancyContext = createContext();

export const VacancyProvider = ({ children }) => {
  const [vacancies, setVacancies] = useState(allVacancies);
  const [filteredVacancies, setFilteredVacancies] = useState([]);

  return (
    <VacancyContext.Provider
      value={{
        vacancies,
        setVacancies,
        filteredVacancies,
        setFilteredVacancies,
      }}
    >
      {children}
    </VacancyContext.Provider>
  );
};
