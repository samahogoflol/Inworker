export const filterVacanciesByCity = (allVacancies, cityValue) => {
  if (!cityValue) {
    return allVacancies;
  } else {
    return allVacancies.filter((vacancy) => vacancy.city.toLowerCase() === cityValue.toLowerCase());
  }
};
