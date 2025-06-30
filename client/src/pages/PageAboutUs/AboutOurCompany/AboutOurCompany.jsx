import "./style.css";

const AboutOurCompany = () => {
  return (
    <>
      <h2 className="about_our_company_header">INWORKER - Компанія, з багаторічним досвідом працевлаштування Українців в Польщі. </h2>
      <div className="about_our_company_container">
        <section className="card_about_our_company_green">
          {/* <img src={recomendation} alt="Безкоштовне працевлаштування" /> */}
          <h3 className="card_about_our_company_title">Безкоштовне працевлаштування</h3>
          <p>
            <p>Ми не беремо оплату за консультації, оформлення документів чи допомогу в пошуку роботи.</p>
          </p>
        </section>

        <section className="card_about_our_company_grey">
          {/* <img src={recomendation} alt="Безкоштовне працевлаштування" /> */}
          <h3 className="card_about_our_company_title">Навіть без досвіду</h3>
          <p>Допомогаємо знайти роботу як для спеціалістів, так і для кандидатів без досвіду.</p>
        </section>

        <section className="card_about_our_company_black">
          {/* <img src={recomendation} alt="Безкоштовне працевлаштування" /> */}
          <h3 className="card_about_our_company_title">Гарантія легальності</h3>
          <p>Пропонуємо тільки офіційні вакансії з підписанням контракту з роботодавцем.</p>
        </section>

        <section className="card_about_our_company_grey">
          {/* <img src={recomendation} alt="Безкоштовне працевлаштування" /> */}
          <h3 className="card_about_our_company_title">Висока заробітна плата</h3>
          <p>Наші кандидати в середньому отримують 50 тис.грн на місяць, чистими.</p>
        </section>

        <section className="card_about_our_company_grey">
          {/* <img src={recomendation} alt="Безкоштовне працевлаштування" /> */}
          <h3 className="card_about_our_company_title">Підтримка на кожному етапі</h3>
          <p>Супроводжуємо на всіх етапах. Від подачі документів, до останнього робочого дня.</p>
        </section>

        <section className="card_about_our_company_black">
          {/* <img src={recomendation} alt="Безкоштовне працевлаштування" /> */}
          <h3 className="card_about_our_company_title">Ми працюємо з найкращими </h3>
          <p>Наші партнери : "Personnel Service", "Gremi Personal" та інші.</p>
        </section>

        <section className="card_about_our_company_grey">
          {/* <img src={recomendation} alt="Безкоштовне працевлаштування" /> */}
          <h3 className="card_about_our_company_title">У нас великий досвід</h3>
          <p>За час роботи компанії, працевлаштовано більше 5000 людей.</p>
        </section>

        <section className="card_about_our_company_green">
          {/* <img src={recomendation} alt="Безкоштовне працевлаштування" /> */}
          <h3 className="title_inside_card">Ваше успішне працевлаштування - наш пріорітет</h3>
          <p>Ми не беремо гроші за послуги, з наших клієнтів. Нам платить замовник, за успішно виконану роботу.</p>
        </section>
      </div>
      {/* <button className="get_free_consultation">Отримати безкоштовну консультацію</button> */}
    </>
  );
};

export default AboutOurCompany;
