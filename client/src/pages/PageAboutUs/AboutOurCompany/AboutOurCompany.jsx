import React from "react";

import "./aboutOurCompany.css";

const AboutOurCompany = () => {
  return (
    <>
      <h2 className="inworker_company">INWORKER - Компанія, з багаторічним досвідом працевлаштування Українців в Польщі. </h2>
      <div className="cards_about_our">
        <div className="card_about_our_orange">
          {/* <img src={recomendation} alt="Безкоштовне працевлаштування" /> */}
          <h3 className="title_inside_card">Безкоштовне працевлаштування</h3>
          <p>
            <p>Ми не беремо оплату за консультації, оформлення документів чи допомогу в пошуку роботи.</p>
          </p>
        </div>

        <div className="card_about_our_white">
          {/* <img src={recomendation} alt="Безкоштовне працевлаштування" /> */}
          <h3 className="title_inside_card">Навіть без досвіду</h3>
          <p>Допомогаємо знайти роботу як для спеціалістів, так і для кандидатів без досвіду.</p>
        </div>

        <div className="card_about_our_black">
          {/* <img src={recomendation} alt="Безкоштовне працевлаштування" /> */}
          <h3 className="title_inside_card">Гарантія легальності</h3>
          <p>Пропонуємо тільки офіційні вакансії з підписанням контракту з роботодавцем.</p>
        </div>

        <div className="card_about_our_white">
          {/* <img src={recomendation} alt="Безкоштовне працевлаштування" /> */}
          <h3 className="title_inside_card">Висока заробітна плата</h3>
          <p>Наші кандидати в середньому отримують 50 тис.грн на місяць, чистими.</p>
        </div>

        <div className="card_about_our_white">
          {/* <img src={recomendation} alt="Безкоштовне працевлаштування" /> */}
          <h3 className="title_inside_card">Підтримка на кожному етапі</h3>
          <p>Супроводжуємо на всіх етапах. Від подачі документів, до останнього робочого дня.</p>
        </div>

        <div className="card_about_our_black">
          {/* <img src={recomendation} alt="Безкоштовне працевлаштування" /> */}
          <h3 className="title_inside_card">Ми працюємо з найкращими </h3>
          <p>Наші партнери : "Personnel Service", "Gremi Personal" та інші.</p>
        </div>

        <div className="card_about_our_white">
          {/* <img src={recomendation} alt="Безкоштовне працевлаштування" /> */}
          <h3 className="title_inside_card">У нас великий досвід</h3>
          <p>
           За час роботи компанії, працевлаштовано більше 5000 людей. 
          </p>
        </div>

        <div className="card_about_our_orange">
          {/* <img src={recomendation} alt="Безкоштовне працевлаштування" /> */}
          <h3 className="title_inside_card">Ваше успішне працевлаштування - наш пріорітет</h3>
          <p>
            Ми не беремо гроші за послуги, з наших клієнтів. 
            Нам платить замовник, за успішно виконану роботу.
          </p>
        </div>
      </div>
      {/* <button className="get_free_consultation">Отримати безкоштовну консультацію</button> */}
    </>
  );
};

export default AboutOurCompany;
