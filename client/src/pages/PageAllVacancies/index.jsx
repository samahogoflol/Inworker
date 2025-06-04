import React from "react";

import VacanciesCards from "../../components/VacanciesCards";
import Header from "../../components/Header";
import VacancyFilter from "../../components/VacancyFilter";
import { VacancyProvider } from "../../components/VacancyContext";

const PageAllVacancies = () => {
  return (
    <>
      <Header />
      <VacancyProvider>
        <VacancyFilter />
        <VacanciesCards enablePagination={true} />
      </VacancyProvider>
    </>
  );
};

export default PageAllVacancies;
