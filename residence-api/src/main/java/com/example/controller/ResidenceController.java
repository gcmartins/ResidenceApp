package com.example.controller;

import com.example.dto.ResidenceDTO;
import com.example.model.Residence;
import com.example.model.ResidenceBuilder;
import com.example.service.ResidenceService;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.annotation.*;

import javax.inject.Inject;
import javax.persistence.PersistenceException;
import java.util.List;

@Controller("/residence")
public class ResidenceController {

    @Inject
    private ResidenceService residenceService;

    @Post
    public HttpResponse<Residence> saveResidence(@Body ResidenceDTO residenceDTO){
        try {
            Residence residence = ResidenceBuilder.createResidence(residenceDTO);
            Residence savedResidence = residenceService.saveResidence(residence);
            return HttpResponse.created(savedResidence);
        } catch (PersistenceException e){
            return HttpResponse.badRequest();
        } catch (Exception e){
            return HttpResponse.serverError();
        }
    }

    @Get
    public HttpResponse<List<Residence>> getResidences(){
        List<Residence> residences = residenceService.getResidences();
        return HttpResponse.ok(residences);
    }

    @Delete("/{id}")
    public HttpResponse deleteResidence(Long id){
        try {
            residenceService.deleteResidenceById(id);
            return HttpResponse.ok();
        } catch (PersistenceException e) {
            return HttpResponse.notFound();
        } catch (Exception e) {
            return HttpResponse.serverError();
        }
    }
}
