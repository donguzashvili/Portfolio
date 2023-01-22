import { createBrowserRouter } from "react-router-dom";
import MainPage from "../components/main";

const Router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/projects", element: <div></div> },
]);

export default Router;
