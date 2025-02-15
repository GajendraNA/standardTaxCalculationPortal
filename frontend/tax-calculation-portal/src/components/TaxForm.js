// src/components/TaxForm.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TaxForm = () => {
  const [taxData, setTaxData] = useState({
    annualIncome: 0,
    investments80C: 0,
    hra: 0,
    lta: 0,
    otherIncome: 0,
    otherDeductions: 0,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaxData({ ...taxData, [name]: parseFloat(value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/calculate-tax", taxData);
      navigate("/result", { state: { taxResult: response.data } });
    } catch (error) {
      console.error("Error calculating tax:", error);
    }
  };

  return (
    <div>
      <h2>Tax Calculation Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Annual Income:</label>
          <input type="number" name="annualIncome" value={taxData.annualIncome} onChange={handleChange} required />
        </div>
        <div>
          <label>Investments (80C):</label>
          <input type="number" name="investments80C" value={taxData.investments80C} onChange={handleChange} />
        </div>
        <div>
          <label>HRA:</label>
          <input type="number" name="hra" value={taxData.hra} onChange={handleChange} />
        </div>
        <div>
          <label>LTA:</label>
          <input type="number" name="lta" value={taxData.lta} onChange={handleChange} />
        </div>
        <div>
          <label>Other Income:</label>
          <input type="number" name="otherIncome" value={taxData.otherIncome} onChange={handleChange} />
        </div>
        <div>
          <label>Other Deductions:</label>
          <input type="number" name="otherDeductions" value={taxData.otherDeductions} onChange={handleChange} />
        </div>
        <button type="submit">Calculate Tax</button>
      </form>
    </div>
  );
};

export default TaxForm;