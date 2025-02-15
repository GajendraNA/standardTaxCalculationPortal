package com.gajendra.stcp.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TaxRequest {
    private double annualIncome;
    private double investments80C;
    private double investments80D;
    private double hra;
    private double lta;
    private double otherIncome;
    private double otherDeductions;
}


