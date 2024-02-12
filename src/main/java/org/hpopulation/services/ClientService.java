package org.hpopulation.services;

import com.opencsv.bean.CsvToBean;
import com.opencsv.bean.CsvToBeanBuilder;
import com.opencsv.bean.HeaderColumnNameMappingStrategy;
import org.hpopulation.CsvRepresentation;
import org.hpopulation.models.Client;
import org.hpopulation.repository.ClientRepository;
import org.springframework.stereotype.Service;

import java.io.*;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class ClientService {

    ClientRepository clientRepository;


    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    private Set<Client> parseCsv(File file) {
        try (Reader reader = new BufferedReader(new FileReader(file))) {
            HeaderColumnNameMappingStrategy<CsvRepresentation> strategy =
                    new HeaderColumnNameMappingStrategy<>();
            strategy.setType(CsvRepresentation.class);
            CsvToBean<CsvRepresentation> csvToBean =
                    new CsvToBeanBuilder<CsvRepresentation>(reader)
                            .withMappingStrategy(strategy)
                            .withIgnoreEmptyLine(true)
                            .withIgnoreLeadingWhiteSpace(true)
                            .build();
            return csvToBean.parse()
                    .stream()
                    .map(csvLine -> Client.builder()
                            .year((csvLine.getYear()))
                            .active(csvLine.getActive())
                            .client_id(csvLine.getClient_id())
                            .first_name(csvLine.getFirst_name())
                            .last_name(csvLine.getLast_name())
                            .gender(String.valueOf(csvLine.getGender()))
                            .DOB(csvLine.getDOB())
                            .city(csvLine.getCity())
                            .indigenous(csvLine.getIndigenous())
                            .pwd(csvLine.getPwd())
                            .vet(csvLine.getVet())
                            .emergency_sheltered(csvLine.getEmergency_sheltered())
                            .bus_pass(csvLine.getBus_pass())
                            .clothing_supplement(csvLine.getClothing_supplement())
                            .pet_deposit(csvLine.getPet_deposit())
                            .pssg(csvLine.getPssg())
                            .status(csvLine.getStatus())
                            .deceased(csvLine.getDeceased())
                            .build()
                    )
                    .collect(Collectors.toSet());
        } catch (Exception err){
            throw  new RuntimeException(err.getMessage());
        }
    }

    public void loadClientIntoDB() {
        String filePath = "src/main/resources/Data.csv";
        File file = new File(filePath);
        Set<Client> clients = parseCsv(file);
        clientRepository.saveAll(clients);
    }

    public Iterable<Client> findAllClient(){
        if (clientRepository.count() == 0){
            loadClientIntoDB();
        }
        return clientRepository.findAll();
    }


    public void createClient(Client client) {
        boolean exists = clientRepository.findById(client.getId()).isPresent();
        System.out.println(exists);
        if (exists) {
            throw new IllegalArgumentException("A user with the ID provided already exists.");
        } else {
            clientRepository.save(client);
        }
        clientRepository.save(client);
    }

    public Optional<Client> getClient(Long id) {
        return clientRepository.findById(id);
    }

    public void updateClient(Client client, Long id) {
        clientRepository
                .findById(id)
                .ifPresentOrElse(
                        existingUser -> clientRepository.save(client),
                        () -> {
                            throw new IllegalArgumentException(id + "isn't found");
                        }
                );
    }

    public void deleteClient(Long id) {
        clientRepository
                .findById(id)
                .ifPresentOrElse(
                        existingUser -> clientRepository.deleteById(id),
                        () -> {
                            throw new IllegalArgumentException(id + "isn't found");
                        }
                );
    }
}

