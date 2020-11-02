package com.suntech.service;

import com.suntech.model.Residence;
import com.suntech.repository.ResidenceRepository;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.List;

@Singleton
public class ResidenceService {

    @Inject
    private ResidenceRepository residenceRepository;

    public Residence saveResidence(Residence residence){
        return residenceRepository.save(residence);
    }

    public List<Residence> getResidences(){
        return residenceRepository.findAll();
    }

    public Residence updateResidence(Residence residence){
        return residenceRepository.update(residence);
    }

    public void deleteResidenceById(Long id){
       residenceRepository.deleteById(id);
    }
}
