import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css";

import telegramIcon from "../../images/telegram.png";
import viberIcon from "../../images/viber.png";
import telefonIcon from "../../images/telefon.png";

import { telegramUrl, viberUrl, gmailUrl, contactNumberMenedgerOne, contactNumberMenedgerTwo } from "../../utils/contacts";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <nav className="footer_nav_socials">
          <h2>
            <NavLink end to="/">
              <span style={{ color: "#9e3004e7" }}>IN</span>WORKER
            </NavLink>
          </h2>
          <section className="footer_socials_block">
            <a target="_blank" href={telegramUrl}>
              <img src={telegramIcon} alt="Посилання на телеграм групу компанії" />
            </a>
            <a target="_blank" href={viberUrl}>
              <img src={viberIcon} alt="Контакт менеджера в вайбері" />
            </a>
            <a href={contactNumberMenedgerOne}>
              <img src={telefonIcon} alt="Контактний телефон менеджера" />
            </a>
          </section>
        </nav>
        <nav>
          <ul className="footer_nav_list">
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
        <nav className="footer_nav_contacts">
          <h3 className="footer_nav_contacts_header">Контакти</h3>
          <section className="footer_contacts">
            <a href={contactNumberMenedgerOne}>+380664844563</a>
            <a href={contactNumberMenedgerTwo}>+380935612197</a>
            <a href={gmailUrl}>inworker2022@gmail.com</a>
          </section>
        </nav>
      </div>
      <div className="footer_privacy_policy">
        <div className="footer_avtor_policy"></div>
        <div className="footer_text_privacy_policy">2022 Всі права захищенно. InWorker</div>
      </div>
    </>
  );
};

export default Footer;
