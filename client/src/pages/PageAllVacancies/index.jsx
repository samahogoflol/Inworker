import React from "react";

import VacanciesCards from "../../components/VacanciesCards";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const PageAllVacancies = () => {
  return (
    <>
      <Header />
      {/* <VacancyProvider> */}
      {/* <VacancyFilter /> */}
      <VacanciesCards enablePagination={true} />
      {/* </VacancyProvider> */}
      <Footer />
    </>
  );
};

export default PageAllVacancies;
