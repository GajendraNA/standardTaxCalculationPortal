import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./TaxForm.css"; // Import component-specific styles

const TaxForm = () => {
    const [taxData, setTaxData] = useState({
        annualIncome: 0,
        investments80C: 0,
        investments80D: 0,
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
            const response = await axios.post("/api/v1/calculate-tax", taxData);
            navigate("/result", { state: { taxResult: response.data } });
        } catch (error) {
            console.error("Error calculating tax:", error);
        }
    };

    return (
        <div className="tax-form">
            <h2>Tax Calculation Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Annual Income:</label>
                    <input type="number" name="annualIncome" placeholder="0" value={taxData.annualIncome} onChange={handleChange} required />
                </div>
                <div>
                    <label>Investments (80C):</label>
                    <input type="number" name="investments80C" placeholder="0" value={taxData.investments80C} onChange={handleChange} />
                </div>
                <div>
                    <label>Investments (80D):</label>
                    <input type="number" name="investments80D" placeholder="0" value={taxData.investments80D} onChange={handleChange} />
                </div>
                <div>
                    <label>HRA:</label>
                    <input type="number" name="hra" placeholder="0" value={taxData.hra} onChange={handleChange} />
                </div>
                <div>
                    <label>LTA:</label>
                    <input type="number" name="lta" placeholder="0" value={taxData.lta} onChange={handleChange} />
                </div>
                <div>
                    <label>Other Income:</label>
                    <input type="number" name="otherIncome" placeholder="0" value={taxData.otherIncome} onChange={handleChange} />
                </div>
                <div>
                    <label>Other Deductions:</label>
                    <input type="number" name="otherDeductions" placeholder="0" value={taxData.otherDeductions} onChange={handleChange} />
                </div>
                <button type="submit">Calculate Tax</button>
            </form>
        </div>
    );
};

export default TaxForm;