// import React, { useContext, useEffect, useState } from "react";
// import { VacancyContext } from "../VacancyContext";

// import "./vacancyFilter.css";

// const VacancyFilter = () => {
//   const { vacancies, setFilteredVacancies } = useContext(VacancyContext);

//   const [selectedCity, setSelectedCity] = useState("");
//   const [selectedContract, setSelectedContract] = useState("");
//   const [handledSearch, setHandledSearch] = useState("");

//   useEffect(() => {
//     applyFilters();
//   }, [selectedCity, selectedContract, handledSearch]);

//   const uniqueContracts = [];
//   const uniqueCities = [];

//   vacancies.map((vacancy) => {
//     if (!uniqueCities.includes(vacancy.city)) {
//       uniqueCities.push(vacancy.city);
//     }
//   });

//   vacancies.map((vacancy) => {
//     if (!uniqueContracts.includes(vacancy.contract)) {
//       uniqueContracts.push(vacancy.contract);
//     }
//   });

//   const handleSearch = (e) => {
//     const value = e.target.value;

//     setHandledSearch(value);
//   };

//   const contractFilter = (e) => {
//     const value = e.target.value;

//     setSelectedContract(value);
//   };

//   const cityFilter = (e) => {
//     const value = e.target.value;

//     setSelectedCity(value);
//   };

//   const applyFilters = () => {
//     let filtered = vacancies;

//     if (selectedCity) {
//       filtered = filtered.filter((vacancy) => vacancy.city === selectedCity);
//     }

//     if (selectedContract) {
//       filtered = filtered.filter((vacancy) => vacancy.contract === selectedContract);
//     }

//     if (handledSearch) {
//       filtered = filtered.filter((vacancy) => vacancy.title.toLowerCase().includes(handledSearch.toLowerCase()));
//     }

//     setFilteredVacancies(filtered);
//   };

//   return (
//     <div>
//       <input type="text" placeholder="Пошук за назвою вакансії" value={handledSearch} onChange={handleSearch} />

//       <select value={selectedContract} onChange={contractFilter}>
//         <option value="">Трудовий Договір</option>
//         {uniqueContracts.map((contract) => (
//           <option key={contract} value={contract}>
//             {contract}
//           </option>
//         ))}
//       </select>

//       <select value={selectedCity} onChange={cityFilter}>
//         <option value="">Місто Праці</option>
//         {uniqueCities.map((city) => (
//           <option key={city} value={city}>
//             {city}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default VacancyFilter;
