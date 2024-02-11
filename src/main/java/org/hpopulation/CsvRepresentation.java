package org.hpopulation;

import com.opencsv.bean.CsvBindByName;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CsvRepresentation {
    //Year,Active,Client ID,First Name,Last Name,Gender,Date of Birth,City,
    // Indigenous,PWD,Vet,Emergency Sheltered,Bus Pass,Clothing Supplement,Pet Deposit,PSSG,Status,Deceased
    @CsvBindByName(column = "Year")
    private int year;
    @CsvBindByName(column = "Active")
    private String active;
    @CsvBindByName(column = "Client ID")
    private int client_id;
    @CsvBindByName(column = "First Name")
    private String first_name;
    @CsvBindByName(column = "Last Name")
    private String last_name;
    @CsvBindByName(column = "Gender")
    private String gender;
    @CsvBindByName(column = "Date of Birth")
    private String DOB;
    @CsvBindByName(column = "City")
    private String city;
    @CsvBindByName(column = "Indigenous")
    private String indigenous;
    @CsvBindByName(column = "PWD")
    private String pwd;
    @CsvBindByName(column = "Vet")
    private String vet;
    @CsvBindByName(column = "Emergency Sheltered")
    private String emergency_sheltered;
    @CsvBindByName(column = "Bus Pass")
    private String busPass;
    @CsvBindByName(column = "Clothing Supplement")
    private String clothing_supplement;
    @CsvBindByName(column = "Pet Deposit")
    private String pet_deposit;
    @CsvBindByName(column = "PSSG")
    private String pssg;
    @CsvBindByName(column = "Status")
    private String status;
    @CsvBindByName(column = "Deceased")
    private String deceased;
}
