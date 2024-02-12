package org.hpopulation.controllers;

import jakarta.validation.Valid;
import org.hpopulation.models.Client;
import org.hpopulation.repository.ClientRepository;
import org.hpopulation.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Optional;

@RestController
@RequestMapping("/api/clients")
@CrossOrigin(origins = "http://localhost:8000")
public class ClientController {
    private final ClientRepository clientRepository;

    @Autowired
    ClientService clientService;

    public ClientController(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    @GetMapping
    public Iterable<Client> getAllClients() {
        return clientService.findAllClient();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createClientUser(@Valid @RequestBody Client client ){
        clientService.createClient(client);
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.FOUND)
    public Optional<Client> findClientById(@PathVariable Long id){
        return clientService.getClient(id);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void updateClientById(@PathVariable Long id, @Valid @RequestBody Client client){
        clientService.updateClient(client, id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteClientById(@PathVariable Long id){
        clientService.deleteClient(id);
    }


}
