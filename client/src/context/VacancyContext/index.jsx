import React, { createContext, useContext, useState, useEffect } from "react";

import getAllVacancies from "../../api/vacancyFromDB";

export const VacancyContext = createContext();

export const VacancyProvider = ({ children }) => {
  const [vacancies, setVacancies] = useState([]);
  const [filteredVacancies, setFilteredVacancies] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [searchVacancyName, setSearchVacancyName] = useState("");
  const [selectedContractType, setSelectedContractType] = useState("");

  useEffect(() => {
    getAllVacancies().then((res) => {
      setVacancies(res);
    });
  }, []);

  return (
    <VacancyContext.Provider
      value={{
        vacancies,
        setVacancies,
        filteredVacancies,
        setFilteredVacancies,
        selectedCity,
        setSelectedCity,
        searchVacancyName,
        setSearchVacancyName,
        selectedContractType,
        setSelectedContractType,
      }}
    >
      {children}
    </VacancyContext.Provider>
  );
};
