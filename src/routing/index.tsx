import { createBrowserRouter } from "react-router-dom";

import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import CvPage from "../components/cv-page";

import MainPage from "../components/main";

// const Router = createBrowserRouter([
//   { path: "/", element: <MainPage /> },
//   { path: "/projects", element: <div></div> },
// ]);

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/cv" element={<CvPage />} />
    </Routes>
  );
};

export default Router;
