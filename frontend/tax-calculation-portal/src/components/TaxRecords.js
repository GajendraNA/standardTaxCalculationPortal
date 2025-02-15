import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TaxRecords.css"; // Import component-specific styles

const TaxRecords = () => {
    const [taxRecords, setTaxRecords] = useState([]);

    useEffect(() => {
        const fetchTaxRecords = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/v1/tax-records");
                setTaxRecords(response.data);
            } catch (error) {
                console.error("Error fetching tax records:", error);
            }
        };

        fetchTaxRecords();
    }, []);

    return (
        <div className="tax-records">
            <h2>Tax Records</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Annual Income</th>
                        <th>Taxable Income</th>
                        <th>Tax Payable</th>
                        <th>Tax Savings Suggestions</th>
                    </tr>
                </thead>
                <tbody>
                    {taxRecords.map((record) => (
                        <tr key={record.id}>
                            <td>{record.id}</td>
                            <td>{record.annualIncome}</td>
                            <td>{record.taxableIncome}</td>
                            <td>{record.taxPayable}</td>
                            <td>{record.taxSavingsSuggestions}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaxRecords;