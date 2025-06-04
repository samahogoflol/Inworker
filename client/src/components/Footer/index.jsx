import React from "react";
import { NavLink } from "react-router-dom";

import "./footer.css";

import telegram from "../../images/telegram.png";
import viber from "../../images/viber.png";
import telefon from "../../images/telefon.png";

const Footer = () => {
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
            <a>
              <img src={telegram} alt="Посилання на телеграм групу компанії" />
            </a>
            <a>
              <img src={viber} alt="Посилання на телеграм групу компанії" />
            </a>
            <a>
              <img src={telefon} alt="Посилання на телеграм групу компанії" />
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
          <ul>
            <li style={{ marginBottom: "40px", color: "rgb(5, 235, 235)" }}>Контакти</li>
            <li>+380664844563</li>
            <li>+380935612197</li>
            <li>inworker2022@gmail.com</li>
          </ul>
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
