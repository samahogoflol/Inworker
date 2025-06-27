import { useEffect, useState } from "react";
import FormAppear from "../../../components/FormAppear";

import "./mainFon.css";

import headFon from "../../../images/headFon.png";
import { use } from "react";

const MainFon = () => {
  const [animation, setAnimation] = useState(false);
  const [visibleForm, setVisibleForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setAnimation(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {!visibleForm ? null : <FormAppear   />}
      <div className="main_form">
        <div className="image_container">
          <img className="main_fon" src={headFon} alt="Замовити зворотній зв’зок" />
          <div className="overlay"> </div>
        </div>
        <h1 className={"overlay_icon"}>
          <span style={{ color: "#9e3004e7" }}>IN</span>WORKER
        </h1>
        <h2 className={`overlay_text ${animation ? "_active" : ""}`}>
          Ми пропонуємо найкращу роботу в Польщі <br />
          Заробітна плата від 50.000 грн/міс
          <br />
          Повний супровід від першого, <br />
          до останнього робочого дня
        </h2>
        {
          <button onClick={() => setVisibleForm(true)} className={`overlay_btn ${animation ? "_active" : ""}`}>
            Підібрати вакансію
          </button>
        }
      </div>
    </>
  );
};

export default MainFon;
