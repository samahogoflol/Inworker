import React, { useEffect, useState, useRef } from "react";
import "./wayToWorkWithUs.css";

const WaytoWorkWithUs = ({ cardsTemplate }) => {
  const [visibleCards, setVisibleCards] = useState(0); // Відповідає за кількість видимих карток
  const myRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            setVisibleCards((prev) => {
              if (prev < cardsTemplate.length) {
                return prev + 1;
              } else {
                clearInterval(interval);
                return prev;
              }
            });
          }, 1000); 
        }
      },
      { threshold: 0.5 }
    );

    if (myRef.current) {
      observer.observe(myRef.current);
    }

    return () => {
      if (myRef.current) {
        observer.unobserve(myRef.current);
      }
    };
  }, [cardsTemplate.length]);

  return (
    <>
      <h2 className="way_to_work_with_us_title">
        З нами Ваш шлях до роботи буде простим, та зрозумілим
      </h2>
      <div className="grid_way_to_work_with_us" ref={myRef}>
        {cardsTemplate.map((card, index) => (
          <div
            key={index}
            className={`card_way_to_work_with_us ${
              index < visibleCards ? "_active_card_about_us" : ""
            }`}
          >
            <p className="card_text">{card.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default WaytoWorkWithUs;
