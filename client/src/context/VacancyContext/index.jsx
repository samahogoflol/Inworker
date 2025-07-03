import React, { createContext, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getAllVacancies } from "../../api/vacancies";

export const VacancyContext = createContext();

export const VacancyProvider = ({ children }) => {
  const [filteredVacancy, setFilteredVacancy] = useState([]);
  const [uniqueCities, setUniqueCities] = useState([]);
  const [uniqueContractType, setUniqueContractType] = useState([]);

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedContract, setSelectedContract] = useState("");
  const [searchVacancyName, setSearchVacancyName] = useState("");

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["vacancies"],
    queryFn: getAllVacancies,
  });

  useEffect(() => {
    let currentFiltered = data && Array.isArray(data) ? data : [];
    currentFiltered = filterVacanciesByCity(currentFiltered, selectedCity);
    currentFiltered = filterVacanciesByContract(currentFiltered, selectedContract);
    currentFiltered = filteredVacancyByTitle(currentFiltered, searchVacancyName);
    setFilteredVacancy(currentFiltered);
  }, [data, selectedCity, selectedContract, searchVacancyName]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      if (data.length > 0) {
        const cities = new Set(data.map((vacancy) => vacancy.city));
        setUniqueCities(Array.from(cities));
      }
    }
  }, [data]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      if (data.length > 0) {
        const contracts = new Set(data.map((vacancy) => vacancy.contract));
        setUniqueContractType(Array.from(contracts));
      }
    }
  }, [data]);

  const filterVacanciesByCity = (allVacancies, cityValue) => {
    if (!cityValue) {
      return allVacancies;
    } else {
      return allVacancies.filter((vacancy) => vacancy.city.toLowerCase() === cityValue.toLowerCase());
    }
  };

  const filterVacanciesByContract = (allVacancies, contractValue) => {
    if (!contractValue) {
      return allVacancies;
    } else {
      return allVacancies.filter((vacancy) => vacancy.contract.toLowerCase() === contractValue.toLowerCase());
    }
  };

  const filteredVacancyByTitle = (allVacancies, searchTerm) => {
    if (!searchTerm) {
      return allVacancies;
    } else {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      return allVacancies.filter((vacancy) => {
        return vacancy.title.toLowerCase().includes(lowerCaseSearchTerm);
      });
    }
  };

  if (isLoading) {
    return <p>Вакансії загружаються...</p>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <VacancyContext.Provider
      value={{
        data,
        filteredVacancy,
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
