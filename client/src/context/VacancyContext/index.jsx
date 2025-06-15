import React, { createContext, useContext, useState, useEffect } from "react";

import getAllVacancies from "../../api/vacancyFromDB";

import { filterVacanciesByCity } from "../../utils/vacancyFilter";

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

  useEffect(() => {
    const currentFilteredVacancies = filterVacanciesByCity(vacancies, selectedCity);
    setFilteredVacancies(currentFilteredVacancies);
  }, [vacancies, selectedCity]);

  const uniqueCities = [];

  const colectUniqueCities = () => {
    vacancies.forEach((item) => {
      if (!uniqueCities.includes(item.city)) {
        uniqueCities.push(item.city);
      }
    });
  };

  colectUniqueCities();

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
        uniqueCities,
      }}
    >
      {children}
    </VacancyContext.Provider>
  );
};
