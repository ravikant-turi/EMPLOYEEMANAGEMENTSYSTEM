package com.java.ems.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.java.ems.dto.EmployeeDto;
import com.java.ems.service.EmployeeService;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin("*")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    /**
     * Creates a new employee.
     *
     * @param EmployeeDto the employee data transfer object containing employee details
     * @return the saved employee details along with HTTP status 201 (Created)
     */
    @PostMapping
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto dto) {

        EmployeeDto saveEmployeeDto = employeeService.createEmployee(dto);

        return new ResponseEntity<>(saveEmployeeDto, HttpStatus.CREATED);

    }

    /**
     * Retrieves all employees.
     *
     * @return a list of all employees with HTTP status 200 (OK)
     */
    @GetMapping
    public ResponseEntity<List<EmployeeDto>> findAllEmployee() {

        List<EmployeeDto> employeeDtos = employeeService.FindAllEmployee();

        return new ResponseEntity<>(employeeDtos, HttpStatus.OK);
    }

    /**
     * Retrieves an employee by their unique ID.
     *
     * @param id the ID of the employee to retrieve
     * @return the employee details with HTTP status 200 (OK) if found,
     * or HTTP status 404 (Not Found) if no employee exists with the given ID
     */
    @GetMapping("/{id}")
    public ResponseEntity<EmployeeDto> findEmployeeById(@PathVariable("id") Long id) {

        EmployeeDto employeeDto = employeeService.FindEmployeeById(id);

        return new ResponseEntity<>(employeeDto, HttpStatus.OK);
    }

    /**
     * Updates an existing employee with the given ID.
     *
     * @param id          the ID of the employee to update
     * @param employeeDto the employee details to update
     * @return the updated employee details with HTTP status 200 (OK)
     */
    @PutMapping("/{id}")
    public ResponseEntity<EmployeeDto> updateEmployeeById(@PathVariable("id") Long id,
                                                          @RequestBody EmployeeDto employeeDto) {

        EmployeeDto updatedEmployee = employeeService.updateEmployee(id, employeeDto);

        return new ResponseEntity<>(updatedEmployee, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")

    public ResponseEntity<String> deleteEmployeeById(@PathVariable("id") Long id) {

        String message = employeeService.deleteEmployeeById(id);

        return new ResponseEntity<>(message, HttpStatus.OK);
    }
}
