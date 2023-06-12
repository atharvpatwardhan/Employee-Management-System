package com.atharv.employeemanagementsystem.services;

import com.atharv.employeemanagementsystem.model.Employee;

import java.util.List;

public interface EmployeeService {

    Employee createEmployee(Employee employee);

    List<Employee> getAllEmployees();

    boolean deleteEmployee(Long id);

    Employee getEmployeeById(Long id);

    Employee updateEmployees(Long id, Employee employee);
}
