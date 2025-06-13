import React from "react";

import VacanciesCards from "../../components/VacanciesCards";
import Header from "../../components/Header";


const PageAllVacancies = () => {
  return (
    <>
      <Header />
      {/* <VacancyProvider> */}
      {/* <VacancyFilter /> */}
      <VacanciesCards enablePagination={true} />
      {/* </VacancyProvider> */}
    </>
  );
};

export default PageAllVacancies;
