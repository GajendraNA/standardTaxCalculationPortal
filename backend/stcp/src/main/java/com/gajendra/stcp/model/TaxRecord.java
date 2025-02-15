package com.gajendra.stcp.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TaxRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private double annualIncome;
    private double investments80C;
    private double investments80D;
    private double hra;
    private double lta;
    private double otherIncome;
    private double otherDeductions;
    private double taxableIncome;
    private double taxPayable;
    private String taxSavingsSuggestions;
}
