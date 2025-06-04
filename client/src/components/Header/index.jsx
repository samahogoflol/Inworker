import "./header.css";

import { Link, NavLink } from "react-router-dom";

import telegram from "../../images/telegram.png";
import viber from "../../images/viber.png";
import telefon from "../../images/telefon.png";

const Header = () => {
  return (
    <div>
      <header className="app_header">
        <h2 className="main_logo">
          <NavLink end to="/">
            <span style={{ color: "#9e3004e7" }}>IN</span>WORKER
          </NavLink>
        </h2>
        <nav className="nav_header">
          <ul className="nav_list_header">
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
          <Link to="/">
            <img
              src={telegram}
              alt="Посилання на телеграм канал компанії"
              width={"45px"}
              height={"45px"}
              style={{ borderRadius: "50%" }}
            />
          </Link>
          <Link to="/" target="_self">
            <img src={viber} alt="Посилання вайбер компанії" width={"45px"} height={"45px"} style={{ borderRadius: "50%" }} />
          </Link>
          <Link to="/" target="_self">
            <img
              src={telefon}
              alt="Зателефонувати менеджеру компанії, для консультації"
              width={"45px"}
              height={"45px"}
              style={{ borderRadius: "50%" }}
            />
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
