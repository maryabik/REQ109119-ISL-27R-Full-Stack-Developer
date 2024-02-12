package org.hpopulation.models;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Year;
import java.util.Objects;

@Entity
@Table(name = "clients")
@Data
@AllArgsConstructor
@NoArgsConstructor
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
    private String bus_pass;
    private String clothing_supplement;
    private String pet_deposit;
    private String pssg; // BC Ministry of Public Safety and Solicitor
    private String status;
    private String deceased;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Client client)) return false;
        return Objects.equals(getId(), client.getId()) && Objects.equals(getYear(), client.getYear()) && Objects.equals(getActive(), client.getActive()) && Objects.equals(getClient_id(), client.getClient_id()) && Objects.equals(getFirst_name(), client.getFirst_name()) && Objects.equals(getLast_name(), client.getLast_name()) && Objects.equals(getGender(), client.getGender()) && Objects.equals(getDOB(), client.getDOB()) && Objects.equals(getCity(), client.getCity()) && Objects.equals(getIndigenous(), client.getIndigenous()) && Objects.equals(getPwd(), client.getPwd()) && Objects.equals(getVet(), client.getVet()) && Objects.equals(getEmergency_sheltered(), client.getEmergency_sheltered()) && Objects.equals(getBus_pass(), client.getBus_pass()) && Objects.equals(getClothing_supplement(), client.getClothing_supplement()) && Objects.equals(getPet_deposit(), client.getPet_deposit()) && Objects.equals(getPssg(), client.getPssg()) && Objects.equals(getStatus(), client.getStatus()) && Objects.equals(getDeceased(), client.getDeceased());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getYear(), getActive(), getClient_id(), getFirst_name(), getLast_name(), getGender(), getDOB(), getCity(), getIndigenous(), getPwd(), getVet(), getEmergency_sheltered(), getBus_pass(), getClothing_supplement(), getPet_deposit(), getPssg(), getStatus(), getDeceased());
    }
}
