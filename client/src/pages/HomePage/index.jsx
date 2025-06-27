import React from "react";

import AboutUs from "./AboutUs/AboutUs";
import MainFon from "./MainFon/MainFon";
import Form from "../../components/Form";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MarqueeText from "../../components/MarqueeText";
import VacanciesCards from "../../components/VacanciesCards";
import { VacancyProvider } from "../../context/VacancyContext";

const HomePage = () => {
  return (
    <>
      <Header />
      <MainFon />
      <AboutUs />
      <MarqueeText />
      <VacancyProvider>
        <VacanciesCards enablePagination={false} />
      </VacancyProvider>
      <MarqueeText />
      <Form />
      <Footer />
    </>
  );
};

export default HomePage;
