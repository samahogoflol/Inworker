import React from "react";
import { NavLink } from "react-router-dom";

import "./footer.css";

import telegram from "../../images/telegram.png";
import viber from "../../images/viber.png";
import telefon from "../../images/telefon.png";

const Footer = () => {
  const telegramUrl = "https://t.me/robotavpolshi_inworker";

  return (
    <>
      <div className="footer">
        <nav className="nav_footer_socials">
          <h2>
            <NavLink end to="/">
              <span style={{ color: "#9e3004e7" }}>IN</span>WORKER
            </NavLink>
          </h2>
          <div className="footer_socials_block">
            <a target="_blank" href={telegramUrl}>
              <img src={telegram} alt="Посилання на телеграм групу компанії" />
            </a>
            <a target="_blank" href="viber://chat?number=380664844563">
              <img src={viber} alt="Контакт менеджера в вайбері" />
            </a>
            <a href="tel:+380664844563">
              <img src={telefon} alt="Контактний телефон менеджера" />
            </a>
          </div>
        </nav>
        <nav className="nav_footer">
          <ul className="nav_list_footer">
            <li style={{ marginBottom: "40px", color: "rgb(5, 235, 235)" }}>Навігація </li>
            <li>
              <NavLink end style={({ isActive }) => ({ color: isActive ? "#9f0013" : "black" })} to="/">
                Головна
              </NavLink>
            </li>
            <li>
              <NavLink end style={({ isActive }) => ({ color: isActive ? "#9f0013" : "black" })} to="/aboutUs">
                Про нас
              </NavLink>
            </li>
            <li>
              <NavLink end style={({ isActive }) => ({ color: isActive ? "#9f0013" : "black" })} to="/vacancies">
                Вакансії
              </NavLink>
            </li>
            {/* <li>
              <NavLink end style={({ isActive }) => ({ color: isActive ? "#9f0013" : "black" })} to="#">
                Відгуки
              </NavLink>
            </li>
            <li>
              <NavLink end style={({ isActive }) => ({ color: isActive ? "#9f0013" : "black" })} to="#">
                Спіпраця з нами
              </NavLink>
            </li>
            <li>
              <NavLink end style={({ isActive }) => ({ color: isActive ? "#9f0013" : "black" })} to="#">
                Контакти
              </NavLink>
            </li> */}
          </ul>
        </nav>
        <nav className="nav_contact">
          <p style={{ marginBottom: "40px", color: "rgb(5, 235, 235)" }}>Контакти</p>
          <section className="footer_contacts">
            <a href="tel:+380664844563">+380664844563</a>
            <a href="tel:+380935612197">+380935612197</a>
            <a href="mailto:inworker2022@gmail.com">inworker2022@gmail.com</a>
          </section>
        </nav>
      </div>
      <div className="privacy_policy">
        <div className="avtor_policy"></div>
        <div className="text_privacy_policy">2022 Всі права захищенно. InWorker</div>
      </div>
    </>
  );
};

export default Footer;
