package com.springmongodb.service;

import com.springmongodb.model.Employee;
import com.springmongodb.respository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public Employee createEmployee(Employee employee){
        return employeeRepository.save(employee);
    }

    public List<Employee> listEmployee(){
        return employeeRepository.findAll();
    }

    public List<Employee> findbyemployeeid(String employeeId){
        return employeeRepository.findByEmployeeId(employeeId);
    }

}
