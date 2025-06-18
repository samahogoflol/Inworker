export const filterVacanciesByCity = (allVacancies, cityValue) => {
  if (!cityValue) {
    return allVacancies;
  } else {
    return allVacancies.filter((vacancy) => vacancy.city.toLowerCase() === cityValue.toLowerCase());
  }
};

export const filterVacanciesByContract = (allVacancies, contractValue) => {
  if (!contractValue) {
    return allVacancies;
  } else {
    return allVacancies.filter((vacancy) => vacancy.contract.toLowerCase() === contractValue.toLowerCase());
  }
};

export const filteredVacancyByTitle = (allVacancies, searchTerm) => {
  if (!searchTerm) {
    return allVacancies;
  } else {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return allVacancies.filter((vacancy) => {
      return vacancy.title.toLowerCase().includes(lowerCaseSearchTerm);
    });
  }
};

