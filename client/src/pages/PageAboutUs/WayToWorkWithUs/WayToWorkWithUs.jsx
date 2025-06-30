import React, { useEffect, useState, useRef } from "react";
import "./style.css";

const WaytoWorkWithUs = ({ cardsTemplate }) => {
  const [visibleCards, setVisibleCards] = useState(0);
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
      <h2 className="way_to_work_with_us_title">З нами Ваш шлях до роботи буде простим, та зрозумілим</h2>
      <div className="way_to_work_with_us_grid" ref={myRef}>
        {cardsTemplate.map((card, index) => (
          <div key={index} className={`way_to_work_with_us_card ${index < visibleCards ? "way_to_work_with_us_active" : ""}`}>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default WaytoWorkWithUs;
