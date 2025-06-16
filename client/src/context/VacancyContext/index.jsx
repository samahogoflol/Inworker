import React, { createContext, useContext, useState, useEffect } from "react";

import getAllVacancies from "../../api/vacancyFromDB";

import { filterVacanciesByCity } from "../../utils/vacancyFilter";

export const VacancyContext = createContext();

export const VacancyProvider = ({ children }) => {
  const [vacancies, setVacancies] = useState([]);
  const [filteredVacancies, setFilteredVacancies] = useState([]);
  const [uniqueCities, setUniqueCities] = useState([]);

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

  useEffect(() => {
    if (vacancies.length > 0) {
      const cities = new Set(vacancies.map((vacancy) => vacancy.city));
      setUniqueCities(Array.from(cities));
    }
  }, [vacancies]);

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
