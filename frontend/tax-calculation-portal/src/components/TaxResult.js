// src/components/TaxResult.js
import React from "react";
import { useLocation } from "react-router-dom";

const TaxResult = () => {
  const location = useLocation();
  const taxResult = location.state?.taxResult;

  if (!taxResult) {
    return <div>No tax result found.</div>;
  }

  return (
    <div>
      <h2>Tax Calculation Result</h2>
      <p>Taxable Income: {taxResult.taxableIncome}</p>
      <p>Tax Payable: {taxResult.taxPayable}</p>
      <p>Tax Savings Suggestions: {taxResult.taxSavingsSuggestions}</p>
    </div>
  );
};

export default TaxResult;