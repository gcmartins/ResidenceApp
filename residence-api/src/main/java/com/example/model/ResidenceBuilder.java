package com.example.model;

import com.example.dto.ResidenceDTO;

public class ResidenceBuilder {
    public static Residence createResidence(ResidenceDTO residenceDTO){
        Residence residence = new Residence();
        residence.setCep(residenceDTO.getCep());
        residence.setNumber(residenceDTO.getNumber());
        residence.setLatitude(residenceDTO.getLatitude());
        residence.setLongitude(residenceDTO.getLongitude());
        residence.setResidents(residenceDTO.getResidents());
        return residence;
    }
}
