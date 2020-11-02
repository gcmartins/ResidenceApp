package com.suntech.service;

import com.suntech.model.Residence;
import com.suntech.repository.ResidenceRepository;

import javax.inject.Inject;
import javax.inject.Singleton;
import javax.persistence.PersistenceException;
import java.util.List;
import java.util.Optional;

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
        Optional<Residence> optionalResidence = residenceRepository.findById(id);
        if (optionalResidence.isPresent()){
            residenceRepository.deleteById(id);
        } else {
            throw new PersistenceException();
        }
    }
}
