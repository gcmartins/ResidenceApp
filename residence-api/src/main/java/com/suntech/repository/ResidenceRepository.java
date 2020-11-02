package com.suntech.repository;

import com.suntech.model.Residence;
import io.micronaut.data.annotation.Repository;
import io.micronaut.data.repository.CrudRepository;

import java.util.List;

@Repository
public interface ResidenceRepository extends CrudRepository<Residence, Long> {

    List<Residence> findAll();
}
