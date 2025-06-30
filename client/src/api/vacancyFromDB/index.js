export const getAllVacancies = async () => {
  const url = "http://localhost:5000/api/vacancies";

  // не треба називати файли fromDB, на фронті тебе не має єбати звідко то йде))
  // просто api/vacancies

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status ${response.status}`);
    }
    // тут можна просто писати return await response.json(), у getVacancyById теж
    const json = await response.json();
    return json;
  } catch (err) {
    console.error(err.message);
  }
};

export const getVacancyById = async (id) => {
  const url = `http://localhost:5000/api/vacancies/${id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (err) {
    console.error(err.message);
  }
};
