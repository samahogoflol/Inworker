export const getAllVacancies = async () => {
  const url = "http://localhost:5000/api/vacancies";

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status : ${response.status}`);
  }

  return response.json();
};
export const getVacancyById = async (id) => {
  const url = `http://localhost:5000/api/vacancies/${id}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status : ${response.status}`);
  }

  return response.json();
};
