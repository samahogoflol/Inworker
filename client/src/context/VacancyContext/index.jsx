import React, { useContext, useState, useEffect } from "react";
import { createContext } from "react";
import getAllVacancies from "../../api/vacancyFromDB";


export const VacancyContext = createContext();

export const VacancyProvider = ({ children }) => {
  const [vacancies, setVacancies] = useState([]);
  const [filteredVacancies, setFilteredVacancies] = useState([]);

  useEffect(() => {
    getAllVacancies().then((res) => {
      setVacancies(res);
    });
  }, []);
};

// export const VacancyContext = createContext();

// export const VacancyProvider = ({ children }) => {
//   const [vacancies, setVacancies] = useState(allVacancies);
//   const [filteredVacancies, setFilteredVacancies] = useState([]);

//   return (
//     <VacancyContext.Provider
//       value={{
//         vacancies,
//         setVacancies,
//         filteredVacancies,
//         setFilteredVacancies,
//       }}
//     >
//       {children}
//     </VacancyContext.Provider>
//   );
// };
