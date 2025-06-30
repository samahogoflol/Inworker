import "./style.css";

import official from "../../../images/official.png";
import bag from "../../../images/bag.png";
import house from "../../../images/house.png";
import wallet from "../../../images/wallet.png";
import recomendation from "../../../images/recomendation.png";
import managerSup from "../../../images/managerSup.png";

const AboutUs = () => {
  return (
    <>
      <div className="about_us">
        <h2 className="about_us_header">Наші переваги</h2>

        <div className="about_us_container">
          <div className="about_us_item">
            <img src={official} alt="Ми пропонуємо лише офіційне працевлаштування" />
            <section className="about_us_descrition">
              <h3>Лише офіційне працевлаштування</h3>
              <p>Працевлаштування на основі "Umowa zlecenia" та "Umowa o prace"</p>
            </section>
          </div>

          <div className="about_us_item">
            <img src={managerSup} alt="Наші менеджери, завжди на зв’язку" />
            <section className="about_us_descrition">
              <h3>Клієнтська підтримка 24/7</h3>
              <p>Ми на зв'язку з Вами протягом всієї співпраці</p>
            </section>
          </div>

          <div className="about_us_item">
            <img src={wallet} alt="У нас справді висока зарплатня" />
            <section className="about_us_descrition">
              <h3>ЗП від 50.000грн/міс</h3>
              <p>Наші клієнти отримують ЗП на карту, без затримок</p>
            </section>
          </div>

          <div className="about_us_item">
            <img src={bag} alt="Багато різних вакансій" />
            <article className="about_us_descrition">
              <h3>Великий вибір вакансій</h3>
              <p>
                Ми працюємо - по всій території Польщі, зможемо підібрати
                <br /> роботу для кожного
              </p>
            </article>
          </div>

          <div className="about_us_item">
            <img src={house} alt="Надаємо житло високого стандарту" />
            <section className="about_us_descrition">
              <h3>Комфортне безкоштовне житло</h3>
              <p>Ми завжди надамо житло, яке буде Вас задовільняти</p>
            </section>
          </div>

          <div className="about_us_item">
            <img src={recomendation} alt="Наші робітники радать нас друзям та знайомим" />
            <section className="about_us_descrition">
              <h3>Нас рекомендують</h3>
              <p>
                Після вдалої співпраці, наші клієнти рекомендують
                <br /> нас своїм друзям
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
