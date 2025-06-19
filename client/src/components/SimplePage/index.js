import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";
import ImageCarousel from "../ImageCarousel";
import MarqueeText from "../MarqueeText";

import getAllVacancies from "../../api/vacancyFromDB";
import { zleceniaContract, oPraciContract } from "../../utils/SalaryConstants";

import "./style.css";

const SinglePage = () => {
  const star = <div className="star"></div>;

  const [singlePage, setSinglePage] = useState([]);
  const [modalWindowOpen, setModalWindowOpen] = useState(false);

  const handleClose = () => {
    setModalWindowOpen(false);
  };

  useEffect(() => {
    getAllVacancies().then((res) => {
      setSinglePage(res);
    });
  }, []);

  return (
    <>
      <Header />
      {singlePage ? (
        <>
          <div className="single_page_header">
            {/* <div className="single_page_foto">
                <img className="vacancy_image" src={currentVacancy.img.vacancyFoto} alt={currentVacancy.title} />
              </div> */}
            <h3>{singlePage.pageTitle}</h3>
          </div>
          <div className="single_page">
            <div className="single_page_left_side">
              <section>
                <h3>Фото з житла</h3>
                <p>Варіант житла з минулих заїздів наших клієнтів</p>
              </section>
              <div className="hostel_foto_carousel">
                {/* <ImageCarousel images={singlePage.img.vacancyFoto} customClass="center-buttons-carousel" /> */}
              </div>
              <section>
                <h3>Відгукнутись на вакансію</h3>
                <p>Залиште Ваші данні, та наш менеджер зв’яжеться з Вами !</p>
              </section>
              <form className="single_page_form">
                <label for="Введіть ім'я">Введіть Ваше ім’я</label>
                <input type="text" id="Введіть ім'я" />
                <label for="Введіть номер телефону">Номер телефону</label>
                <input type="text" id="Введіть номер телефону" placeholder="Введіть номер телефону з кодом країни (+380...)" />
                <button>Залишити заявку</button>
              </form>
            </div>
            <div className="single_page_right_side">
              <div className="full_description">
                <p className="title_short_about_header">
                  🏢 <span style={{ fontWeight: "bolder" }}>Коротко про основне :</span>
                </p>

                <ul className="description_short_about_header">
                  <li>Місто : {singlePage.city}</li>
                  <li>Трудовий договір : {singlePage.contract}</li>
                  <li>Проживання : {singlePage.hostel}</li>
                  <li>
                    Ставка : {singlePage.contract === "Umowa o pracę" ? oPraciContract.salaryPerMonth : zleceniaContract.salaryPerHour}
                  </li>
                  <li>Графік : {singlePage.workingHours}</li>
                  <li>Робочий одяг : {singlePage.requirements && singlePage.requirements.added}</li>
                </ul>

                <p className="title_short_about_header">
                  🏢 <span style={{ fontWeight: "bolder" }}>Заробітна плата :</span>
                </p>

                <ul className="description_short_about_header">
                  <li>
                    Стандартна ставка :{" "}
                    {singlePage.contract === "Umowa o pracę" ? oPraciContract.salaryPerMonth : zleceniaContract.salaryPerHour}
                  </li>

                  {singlePage.contract === "Umowa o pracę" ? null : (
                    <>
                      <li>Ставка для кандидатів до 26 років: {zleceniaContract.studentsSalary}</li>
                    </>
                  )}

                  {singlePage.contract === "Umowa o pracę" ? (
                    <>
                      <li>Нічні зміни : {singlePage.salary.nigth}</li>
                      <li>Надгодини : {singlePage.salary.overtime}</li>
                      <li>Робота в вихідні та святкові дні : {singlePage.salary.weekendWork}</li>
                    </>
                  ) : null}

                  <li>Премії : {singlePage.premiums}</li>
                </ul>

                <p className="title_short_about_header">
                  🏢 <span style={{ fontWeight: "bolder" }}>Обов'язки :</span>
                </p>

                <ul className="description_short_about_header">
                  <li>{singlePage.responsibilities && singlePage.responsibilities.firstProcess}</li>
                  <li>{singlePage.responsibilities && singlePage.responsibilities.secondProcess}</li>

                  {singlePage.responsibilities && singlePage.responsibilities.thirdProcess ? (
                    <li>{singlePage.responsibilities && singlePage.responsibilities.thirdProcess}</li>
                  ) : null}
                  {singlePage.responsibilities && singlePage.responsibilities.fourthProcess ? (
                    <li>{singlePage.responsibilities && singlePage.responsibilities.fourthProcess}</li>
                  ) : null}
                  {singlePage.responsibilities && singlePage.responsibilities.fifthProcess ? (
                    <li>{singlePage.responsibilities && singlePage.responsibilities.fifthProcess}</li>
                  ) : null}
                </ul>

                <p className="title_short_about_header">
                  🏢 <span style={{ fontWeight: "bolder" }}>Вимоги :</span>
                </p>

                <ul className="description_short_about_header">
                  <li>Для кого робота : {singlePage.requirements && singlePage.requirements.gender}</li>
                  <li>Досвід роботи : {singlePage.requirements && singlePage.requirements.expirience}</li>
                  <li>Знання Польської мови : {singlePage.requirements && singlePage.requirements.proficiency}</li>
                </ul>
              </div>
            </div>
          </div>

          <MarqueeText />
          <div className="carousel_and_leave_form">
            <div className="single_vacancy_footer">
              <h2>Відгуки на вакансію {singlePage.name}</h2>

              <div className="rewievsFon">
                <div className="name_and_date_review">
                  <h3>{singlePage.rewievs && singlePage.rewievs.name}</h3>
                  <h3>{singlePage.rewievs && singlePage.rewievs.date}</h3>
                </div>

                <div className="star_content">
                  {[...Array(5)].map((_, item) => {
                    return (
                      <span key={item} className="star_raiting">
                        {star}
                      </span>
                    );
                  })}
                </div>
                <div className="text_review">
                  <p>{singlePage.rewievs && singlePage.rewievs.review}</p>
                </div>
                <div className="rewievs_carousel">
                  <ImageCarousel
                    images={singlePage.rewievs && singlePage.rewievs.images}
                    customClass="center-buttons-carousel_rewievs"
                  />
                </div>
              </div>
            </div>
            <div className="please_leave_rewiev">
              <section>
                <h2>Ваша думка важлива для наc</h2>
                <p>
                  Ми цінуємо кожну думку, адже ваші слова <br />
                  надихають нас ставати кращими.
                  <br /> Поділіться своїм враженням та допоможіть
                  <br /> іншим зробити правильний вибір. <br />
                  Ваш відгук не лише допомагає нам удосконалюватися,
                  <br /> але й може стати тим самим поштовхом
                  <br /> для когось іншого, хто шукає своє рішення.
                </p>
              </section>
              <div>
                <h3>Ваш відгук Ви можете лишити, натиснувшки кнопку нижче :</h3>
                <button className="modal_show_btn" onClick={() => setModalWindowOpen(true)}>
                  Залишити відгук
                </button>
                {/* <SimpleModal isOpen={modalWindowOpen} handleClose={handleClose} /> */}
              </div>
            </div>
          </div>
        </>
      ) : (
        <Link path="/vacancies"></Link>
      )}
      <Footer />
    </>
  );
};

export default SinglePage;
