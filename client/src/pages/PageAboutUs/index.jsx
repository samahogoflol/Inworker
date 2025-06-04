import React from "react";
import Header from "../../components/Header";
import AboutOurCompany from "./AboutOurCompany/AboutOurCompany";
import FormAppear from "../../components/FormAppear";
import MarqueeText from "../../components/MarqueeText";
import TemplateCardsWorkWithUs from "./TemplateCardsWorkWithUs/TemplateCardsWorkWithUs"
import Form from "../../components/Form";
import Footer from "../../components/Footer";


const PageAboutUs = () => {
  return (
    <>
      <Header />
      <AboutOurCompany />
      <MarqueeText />
      <TemplateCardsWorkWithUs />
      <MarqueeText />
      <Form />
      <Footer />
      {/* <FormAppear /> */}
    </>
  );
};

export default PageAboutUs;
