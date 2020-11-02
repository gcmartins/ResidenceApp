package com.suntech.dto;

public class ResidenceDTO {
    private Integer cep;

    private Integer number;

    private Double latitude;

    private Double longitude;

    private Integer residents;

    public Integer getCep() {
        return cep;
    }

    public void setCep(Integer cep) {
        this.cep = cep;
    }

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public Integer getResidents() {
        return residents;
    }

    public void setResidents(Integer residents) {
        this.residents = residents;
    }
}
