import React, { useEffect, useContext } from "react";

import "./app.sass";

// state imports
import { DataContext } from "./state";

// components

import { RouterProvider } from "react-router-dom";
import component from "./routing";
import Navigation from "./components/navigation/Navigation";

import Router from "./routing";
import Footer from "./components/footer";

function App() {
  const { setData } = useContext(DataContext);
  useEffect(() => {
    fetch("http://localhost:8000")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <>
      <div className="App">
        <Navigation />
        <Router />
        {/* <RouterProvider router={component} /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
