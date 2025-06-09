import React, { useState, useEffect } from "react";

import getAllVacancies from "../../services/vacancyFromDB";

const TestApi = () => {
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    getAllVacancies().then((res) => {
      setVacancies(res);
    });
  }, []);

  return (
    <>
      {vacancies.map((item) => (
        <div>
          <h1 key={item._id}>{item.title}</h1>
        </div>
      ))}
    </>
  );
};

export default TestApi;
