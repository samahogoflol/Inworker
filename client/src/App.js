import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageAboutUs from "./pages/PageAboutUs";
import PageAllVacancies from "./pages/PageAllVacancies";
import SinglePage from "./components/SinglePage";

// Так як ти маєш хедер і футер на кожній сторінці, простіше це додати тут перед і після <Router наприклад, ну або якщо там є лінки, то вже в ньому

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutUs" element={<PageAboutUs />} />
          <Route path="/vacancies" element={<PageAllVacancies />} />
          <Route path="/vacancies/:vacancyId" element={<SinglePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
