// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TaxForm from "./components/TaxForm";
import TaxResult from "./components/TaxResult";
import TaxRecords from "./components/TaxRecords";

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Tax Form</Link> | <Link to="/records">Tax Records</Link>
      </nav>
      <Routes>
        <Route path="/" element={<TaxForm />} />
        <Route path="/result" element={<TaxResult />} />
        <Route path="/records" element={<TaxRecords />} />
      </Routes>
    </Router>
  );
};

export default App;