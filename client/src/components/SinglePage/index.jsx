import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";
import MarqueeText from "../MarqueeText";
import ImageCarousel from "../ImageCarousel";

import { getVacancyById } from "../../api/vacancyFromDB";
import { zleceniaContract, oPraciContract } from "../../utils/SalaryConstants";

import "./style.css";
import ReviewCard from "../ReviewCard/ReviewCard";

const SinglePage = () => {
  const star = <div className="star"></div>;

  const [singlePage, setSinglePage] = useState(null);
  const [modalWindowOpen, setModalWindowOpen] = useState(false);

  const { vacancyId } = useParams();

  const handleClose = () => {
    setModalWindowOpen(false);
  };

  useEffect(() => {
    getVacancyById(vacancyId).then((res) => {
      setSinglePage(res);
    });
  }, [vacancyId]);

  return (
    <>
      <Header />
      {!singlePage ? (
        <>{console.log("loading...")}</>
      ) : (
        <>
          {console.log("done")}
          <h1 className="single_page_header">{singlePage.pageTitle}</h1>
          <div className="single_page">
            <div className="single_page_left_side">
              {/* <h2>{singlePage.pageTitle}</h2> */}

              <h3>Коротко про головне : </h3>
              <ul className="about_main">
                <li>Місто : {singlePage.city}</li>
                <li>Трудовий договір : {singlePage.contract} </li>
                <li>Проживання : {singlePage.hostel}</li>
                <li>
                  Cтавка : {singlePage.contract === "Umowa zlecenia" ? zleceniaContract.salaryPerHour : oPraciContract.salaryPerMonth}
                </li>
                <li>Графік : {singlePage.workingHours}</li>
                <li>Робочий одяг : {singlePage.requirements.added}</li>
              </ul>

              <h3>Заробітня плата : </h3>
              <ul>
                <li>
                  Cтавка : {singlePage.contract === "Umowa zlecenia" ? zleceniaContract.salaryPerHour : oPraciContract.salaryPerMonth}
                </li>
                {singlePage.contract === "Umowa zlecenia" ? null : <li>Нічні зміни : {singlePage.salary.night}</li>}
                {singlePage.contract === "Umowa zlecenia" ? null : <li>Надгодини : {singlePage.salary.overtime}</li>}
                {singlePage.contract === "Umowa zlecenia" ? null : (
                  <li>Робота в вихідні, та святкові дні : {singlePage.salary.weekendWork}</li>
                )}
                {singlePage.contract === "Umowa zlecenia" ? (
                  <li>Для кандидатів до 26 років : {zleceniaContract.studentsSalary}</li>
                ) : null}
              </ul>

              <h3>Обов'язки : </h3>
              <ul>
                <li>{singlePage.responsibilities?.firstProcess}</li>
                <li>{singlePage.responsibilities?.secondProcess}</li>
                {singlePage.responsibilities.thirdProcess ? <li>{singlePage.responsibilities?.thirdProcess}</li> : null}
                {singlePage.responsibilities.fourthProcess ? <li>{singlePage.responsibilities?.fourthProcess}</li> : null}
                {singlePage.responsibilities.fifthProcess ? <li>{singlePage.responsibilities?.fifthProcess}</li> : null}
              </ul>

              <h3>Вимоги : </h3>
              <ul>
                <li>Для кого робота : {singlePage.requirements?.gender} </li>
                <li>Досвід роботи : {singlePage.requirements?.experience} </li>
                <li>Знання польської мови : {singlePage.requirements?.proficiency} </li>
              </ul>
            </div>

            <div className="single_page_right_side">
              <h3>Фото житла</h3>
              <p>Варіанти житла з минулих заїздів наших клієнтів</p>
              <ImageCarousel images={singlePage.img.hostelFoto} />
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default SinglePage;
