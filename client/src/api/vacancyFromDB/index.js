const getAllVacancies = async () => {
  const url = "http://localhost:5000/api/vacancies";

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

export default getAllVacancies;
