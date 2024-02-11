package org.hpopulation.models;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Objects;

@Entity
@Table(name = "clients")
@Data
@Builder
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int year;

    private String active;

    private int client_id;

    private String first_name;
    private String last_name;
    private String gender;
    private String DOB; //date of birth
    private String city;
    private String indigenous;
    private String pwd; // Person With Disability
    private String vet; // Veteran
    private String emergency_sheltered;
    private String busPass;
    private String clothing_supplement;
    private String pet_deposit;
    private String pssg; // BC Ministry of Public Safety and Solicitor
    private String status;
    private String deceased;

    public Client(Long id, int year, String active, int client_id, String first_name, String last_name, String gender, String DOB, String city, String indigenous, String pwd, String vet, String emergency_sheltered, String busPass, String clothing_supplement, String pet_deposit, String pssg, String status, String deceased) {
        this.id = id;
        this.year = year;
        this.active = active;
        this.client_id = client_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.gender = gender;
        this.DOB = DOB;
        this.city = city;
        this.indigenous = indigenous;
        this.pwd = pwd;
        this.vet = vet;
        this.emergency_sheltered = emergency_sheltered;
        this.busPass = busPass;
        this.clothing_supplement = clothing_supplement;
        this.pet_deposit = pet_deposit;
        this.pssg = pssg;
        this.status = status;
        this.deceased = deceased;
    }

    public Client() {

    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Client client)) return false;
        return Objects.equals(getId(), client.getId()) && Objects.equals(getYear(), client.getYear()) && Objects.equals(getActive(), client.getActive()) && Objects.equals(getClient_id(), client.getClient_id()) && Objects.equals(getFirst_name(), client.getFirst_name()) && Objects.equals(getLast_name(), client.getLast_name()) && Objects.equals(getGender(), client.getGender()) && Objects.equals(getDOB(), client.getDOB()) && Objects.equals(getCity(), client.getCity()) && Objects.equals(getIndigenous(), client.getIndigenous()) && Objects.equals(getPwd(), client.getPwd()) && Objects.equals(getVet(), client.getVet()) && Objects.equals(getEmergency_sheltered(), client.getEmergency_sheltered()) && Objects.equals(getBusPass(), client.getBusPass()) && Objects.equals(getClothing_supplement(), client.getClothing_supplement()) && Objects.equals(getPet_deposit(), client.getPet_deposit()) && Objects.equals(getPssg(), client.getPssg()) && Objects.equals(getStatus(), client.getStatus()) && Objects.equals(getDeceased(), client.getDeceased());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getYear(), getActive(), getClient_id(), getFirst_name(), getLast_name(), getGender(), getDOB(), getCity(), getIndigenous(), getPwd(), getVet(), getEmergency_sheltered(), getBusPass(), getClothing_supplement(), getPet_deposit(), getPssg(), getStatus(), getDeceased());
    }
}
