package com.suntech.controller;

import com.suntech.model.Residence;
import com.suntech.service.ResidenceService;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.annotation.*;

import javax.inject.Inject;
import java.util.List;

@Controller
public class ResidenceController {

    @Inject
    private ResidenceService residenceService;

    @Post("/residence")
    public HttpResponse<Residence> saveResidence(@Body Residence residence){
        Residence savedResidence = residenceService.saveResidence(residence);
        return HttpResponse.created(savedResidence);
    }

    @Get("/residence")
    public HttpResponse<List<Residence>> getResidences(){
        List<Residence> residences = residenceService.getResidences();
        return HttpResponse.ok(residences);
    }

    @Delete("/residence/{id}")
    public HttpResponse deleteResidence(Long id){
        residenceService.deleteResidenceById(id);
        return HttpResponse.ok();
    }
}
