import React from "react";
import { VacancyProvider } from "../../context/VacancyContext";

import VacanciesCards from "../../components/VacanciesCards";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import VacancyFilter from "../../components/VacancyFilter";

const PageAllVacancies = () => {
  return (
    <>
      <Header />
      <VacancyProvider>
        <VacancyFilter />
        <VacanciesCards enablePagination={true} />
      </VacancyProvider>
      <Footer />
    </>
  );
};

export default PageAllVacancies;
