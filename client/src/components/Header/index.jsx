import { Link, NavLink } from "react-router-dom";

import telegramIcon from "../../images/telegram.png";
import viberIcon from "../../images/viber.png";
import telefonIcon from "../../images/telefon.png";

import "./style.css";

import { telegramUrl, viberUrl, contactNumberMenedgerOne } from "../../utils/contacts";

const Header = () => {
  return (
    <div>
      <header className="header">
        <h2>
          <NavLink end to="http://localhost:3000/">
            <span style={{ color: "#9e3004e7" }}>IN</span>WORKER
          </NavLink>
        </h2>
        <nav className="header_nav">
          <ul className="header_nav_list">
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
          </ul>
          <div className="header_nav_contact_icons">
            <a className=" " target="_blank" href={telegramUrl}>
              <img src={telegramIcon} alt="Посилання на телеграм канал компанії" />
            </a>
            <a target="_blank" href={viberUrl}>
              <img src={viberIcon} alt="Посилання вайбер компанії" />
            </a>
            <a target="_blank" href={contactNumberMenedgerOne}>
              <img src={telefonIcon} alt="Зателефонувати менеджеру компанії, для консультації" />
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
