package com.springmongodb.controller;

import com.springmongodb.model.Employee;
import com.springmongodb.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//@CrossOrigin(origins = "http://localhost:5500")
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping
    public List<Employee> listemployee(){
        return employeeService.listEmployee();
    }

    @PostMapping("/add")
    public Employee createemployee(@RequestBody Employee employee){
        return employeeService.createEmployee(employee);
    }

    @GetMapping("/{employeeId}")
    public List<Employee> findbyemployeeid(@PathVariable String employeeId){
        return employeeService.findbyemployeeid(employeeId);
    }
}
