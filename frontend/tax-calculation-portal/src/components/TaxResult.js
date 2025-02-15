import React from "react";
import { useLocation } from "react-router-dom";
import "./TaxResult.css"; // Import component-specific styles

const TaxResult = () => {
  const location = useLocation();
  const taxResult = location.state?.taxResult;

  if (!taxResult) {
    return <div>No tax result found.</div>;
  }

  return (
    <div className="tax-result">
      <h2>Tax Calculation Result</h2>
      <p>Taxable Income: {taxResult.taxableIncome}</p>
      <p>Tax Payable: {taxResult.taxPayable}</p>
      <p>Tax Savings Suggestions: {taxResult.taxSavingsSuggestions}</p>
    </div>
  );
};

export default TaxResult;