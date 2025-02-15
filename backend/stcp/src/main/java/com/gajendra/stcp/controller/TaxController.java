package com.gajendra.stcp.controller;

import com.gajendra.stcp.dto.TaxRequest;
import com.gajendra.stcp.dto.TaxResponse;
import com.gajendra.stcp.model.TaxRecord;
import com.gajendra.stcp.service.TaxService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin
public class TaxController {

    @Autowired
    TaxService taxService;

    @PostMapping("/calculate-tax")
    public ResponseEntity<TaxResponse> calculateTax(@RequestBody TaxRequest taxRequest) {
        return taxService.calculateTax(taxRequest);
    }

    @GetMapping("tax-records")
    public ResponseEntity<List<TaxRecord>> getAllTaxRecords(){
        return taxService.getAllTaxRecords();
    }


}
