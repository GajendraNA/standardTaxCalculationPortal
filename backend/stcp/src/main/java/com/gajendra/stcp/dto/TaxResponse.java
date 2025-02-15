package com.gajendra.stcp.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TaxResponse {
    private double taxableIncome;
    private double taxPayable;
    private String taxSavingsSuggestions;
}
