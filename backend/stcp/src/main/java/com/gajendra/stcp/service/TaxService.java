package com.gajendra.stcp.service;

import com.gajendra.stcp.dao.TaxRecordRepository;
import com.gajendra.stcp.dto.TaxRequest;
import com.gajendra.stcp.dto.TaxResponse;
import com.gajendra.stcp.model.TaxRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaxService {

    @Autowired
    TaxRecordRepository taxRecordRepository;

    public ResponseEntity<TaxResponse> calculateTax(TaxRequest taxRequest) {
        // Validate input
        if (taxRequest.getAnnualIncome() <= 0) {
            throw new IllegalArgumentException("Annual income must be greater than 0.");
        }

        // Calculate taxable income
        double taxableIncome = calculateTaxableIncome(taxRequest);

        // Calculate tax payable based on Indian tax slabs (FY 2024-25)
        double taxPayable = calculateTaxPayable(taxableIncome);

        // Generate tax savings suggestions (optional)
        String taxSavingsSuggestions = generateTaxSavingsSuggestions(taxRequest);

        // Save to database
        TaxRecord taxRecord = new TaxRecord();
        taxRecord.setAnnualIncome(taxRequest.getAnnualIncome());
        taxRecord.setInvestments80C(taxRequest.getInvestments80C());
        taxRecord.setInvestments80D(taxRequest.getInvestments80D());
        taxRecord.setHra(taxRequest.getHra());
        taxRecord.setLta(taxRequest.getLta());
        taxRecord.setOtherIncome(taxRequest.getOtherIncome());
        taxRecord.setOtherDeductions(taxRequest.getOtherDeductions());
        taxRecord.setTaxableIncome(taxableIncome);
        taxRecord.setTaxPayable(taxPayable);
        taxRecord.setTaxSavingsSuggestions(taxSavingsSuggestions);
        taxRecordRepository.save(taxRecord);

        // Prepare response
        TaxResponse response = new TaxResponse(taxableIncome, taxPayable, taxSavingsSuggestions);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    public ResponseEntity<List<TaxRecord>> getAllTaxRecords() {
        List<TaxRecord> taxRecords = taxRecordRepository.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(taxRecords);
    }

    public double calculateTaxableIncome(TaxRequest taxRequest) {
        double totalDeductions = taxRequest.getInvestments80C() + taxRequest.getInvestments80D() +
                taxRequest.getHra() + taxRequest.getLta() + taxRequest.getOtherDeductions();
        return taxRequest.getAnnualIncome() + taxRequest.getOtherIncome() - totalDeductions;
    }

    public double calculateTaxPayable(double taxableIncome) {
        // Apply Indian tax slabs for FY 2024-25
        if (taxableIncome <= 250000) {
            return 0;
        } else if (taxableIncome <= 500000) {
            return (taxableIncome - 250000) * 0.05;
        } else if (taxableIncome <= 1000000) {
            return 12500 + (taxableIncome - 500000) * 0.2;
        } else {
            return 112500 + (taxableIncome - 1000000) * 0.3;
        }
    }

    public String generateTaxSavingsSuggestions(TaxRequest taxRequest) {
        // Example: Suggest increasing 80C investments if below the limit
        if (taxRequest.getInvestments80C() < 150000) {
            return "Consider investing more in 80C to reduce tax liability.";
        }
        return "No additional tax savings suggestions.";
    }


}
