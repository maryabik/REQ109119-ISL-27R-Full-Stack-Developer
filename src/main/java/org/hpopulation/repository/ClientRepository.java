package org.hpopulation.repository;

import org.hpopulation.models.Client;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

public interface  ClientRepository extends CrudRepository<Client, Long> {
    @Override
    Iterable<Client> findAll();

    @Override
    Optional<Client> findById(Long id);

}
