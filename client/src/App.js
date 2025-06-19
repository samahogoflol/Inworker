import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageAboutUs from "./pages/PageAboutUs";
import PageAllVacancies from "./pages/PageAllVacancies";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutUs" element={<PageAboutUs />} />
          <Route path="/vacancies" element={<PageAllVacancies />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
