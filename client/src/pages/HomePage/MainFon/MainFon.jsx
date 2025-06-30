import { useEffect, useState } from "react";
import FormAppear from "../../../components/FormAppear";

import "./style.css";

import headFon from "../../../images/headFon.png";

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
      {!visibleForm ? null : <FormAppear setVisibleForm={setVisibleForm} />}
      <div className="main_fon">
        <img className="main_fon_image" src={headFon} alt="Замовити зворотній зв’зок" />
        <h1 className="main_fon_overlay_icon">
          <span style={{ color: "#9e3004e7" }}>IN</span>WORKER
        </h1>
        <h2 className={`main_fon_overlay_text ${animation ? "main_fon_animation" : ""}`}>
          Ми пропонуємо найкращу роботу в Польщі <br />
          Заробітна плата від 50.000 грн/міс
          <br />
          Повний супровід від першого, <br />
          до останнього робочого дня
        </h2>
        {
          <button onClick={() => setVisibleForm(true)} className={`main_fon_btn ${animation ? "main_fon_animation" : ""}`}>
            Підібрати вакансію
          </button>
        }
      </div>
    </>
  );
};

export default MainFon;
