package com.springmongodb.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonProperty;

@Data
@Document(collection = "employeelist")
public class Employee {

    @Id
    private String id;
    
    @JsonProperty("employeeId")
    private String employeeId;
    
    @JsonProperty("employeeName")
    private String employeeName;
    
    @JsonProperty("employeeEmail")
    private String employeeEmail;
    
    @JsonProperty("employeeLocation")
    private String employeeLocation;
}
