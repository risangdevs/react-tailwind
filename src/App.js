import React, { createContext, useContext, useState } from "react";
// import ReactDOM from 'react-dom'
// import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { ContactUs } from "./Components/ContactUs/ContactUs";
import { Dashboard } from "./Components/Dashboard/Dashboard";
import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import { PageOne } from "./Components/PageOne";
import { PageThree } from "./Components/PageThree";
import { PageTwo } from "./Components/PageTwo";

function App() {
  const [page, setPage] = useState("landing");
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <PageOne />
              <PageTwo />
              <PageThree />
            </>
          }
        ></Route>
        <Route path="contact" element={<ContactUs />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
