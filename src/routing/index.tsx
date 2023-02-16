import { Routes, Route } from "react-router-dom";

// ** Pages
import CvPage from "../components/cv-page";
import MainPage from "../components/main";
import ProjectsPage from "../components/projectsPage";
import AboutPage from "../components/aboutPage";
import ErrorPage from "../components/404";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/cv" element={<CvPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
