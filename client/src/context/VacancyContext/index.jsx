import React, { createContext, useState, useEffect } from "react";

import getAllVacancies from "../../api/vacancyFromDB";

import { filterVacanciesByCity, filterVacanciesByContract, filteredVacancyByTitle } from "../../utils/vacancyFilter";

export const VacancyContext = createContext();

export const VacancyProvider = ({ children }) => {
  const [vacancies, setVacancies] = useState([]);
  const [filteredVacancies, setFilteredVacancies] = useState([]);

  const [uniqueCities, setUniqueCities] = useState([]);
  const [uniqueContractType, setUniqueContractType] = useState([]);

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedContract, setSelectedContract] = useState("");
  const [searchVacancyName, setSearchVacancyName] = useState("");

  useEffect(() => {
    getAllVacancies().then((res) => {
      setVacancies(res);
    });
  }, []);

  useEffect(() => {
    let currentFiltered = vacancies;
    currentFiltered = filterVacanciesByCity(currentFiltered, selectedCity);
    currentFiltered = filterVacanciesByContract(currentFiltered, selectedContract);
    currentFiltered = filteredVacancyByTitle(currentFiltered, searchVacancyName);
    setFilteredVacancies(currentFiltered);
  }, [vacancies, selectedCity, selectedContract, searchVacancyName]);

  useEffect(() => {
    if (vacancies.length > 0) {
      const cities = new Set(vacancies.map((vacancy) => vacancy.city));
      setUniqueCities(Array.from(cities));
    }
  }, [vacancies]);

  useEffect(() => {
    if (vacancies.length > 0) {
      const contracts = new Set(vacancies.map((vacancy) => vacancy.contract));
      setUniqueContractType(Array.from(contracts));
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
        uniqueContractType,
        setUniqueContractType,
        uniqueCities,
        selectedContract,
        setSelectedContract,
      }}
    >
      {children}
    </VacancyContext.Provider>
  );
};
