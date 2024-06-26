package com.spring.office.payroll.service;

import com.spring.office.employee.Employee;
import com.spring.office.payroll.domain.Salary;
import com.spring.office.payroll.dto.SalaryDto;
import com.spring.office.payroll.repo.SalaryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class SalaryService {

    private final SalaryRepository salaryRepository;
    private final SalaryMapper salaryMapper;

    public SalaryDto addSalary(SalaryDto dto) {
        Employee emp = new Employee();
        emp.setId(dto.getEmployeeId());

        Optional<Salary> salary = salaryRepository.findByEmployee(emp);

        if (salary.isEmpty()) {
            Salary sal = salaryMapper.dtoToSalary(dto);
            var saveSal = salaryRepository.save(sal);
            return salaryMapper.salaryToDto(saveSal);
        }
        return null;
    }

    public SalaryDto updateSalary(SalaryDto dto) {

        Employee emp = new Employee();
        emp.setId(dto.getEmployeeId());

        Optional<Salary> salary = salaryRepository.findByEmployee(emp);

        if (salary.isEmpty()) {
            return null;
        }
        var swap = salaryMapper.swapSalary(dto, salary.get());
        var updateSave = salaryRepository.save(swap);
        return salaryMapper.salaryToDto(updateSave);
    }


    public SalaryDto getSalaryByEmployee(Long id) {
        Employee emp = new Employee();
        emp.setId(id);
        var getEmp = salaryRepository.findByEmployee(emp);
        return getEmp.map(salaryMapper::salaryToDto).orElse(null);
    }


    public List<SalaryDto> getAllSalary() {
        List<Salary> listSalary = salaryRepository.findAll(Sort.by(Sort.Direction.DESC, "basic"));

        return listSalary.stream().map(salaryMapper::salaryToDto)
               .collect(Collectors.toList());

    }

    public void deductLoan(Long empId, double payment){
        Employee emp = new Employee();
        emp.setId(empId);
        salaryRepository.deductLoan(payment,emp);
    }

    public void addLoan(Long empId, double payment){
        Employee emp = new Employee();
        emp.setId(empId);
        salaryRepository.addLoan(payment,emp);
    }


    public Integer sumAllSalary() {
        return salaryRepository.sumAllSalary();
    }

    public void addEpf(Long empId, double providentFund) {
        Employee emp = new Employee();
        emp.setId(empId);
        salaryRepository.addEpf(providentFund,emp);
    }

    public void deductEpf(Long empId, double providentFund) {
        Employee emp = new Employee();
        emp.setId(empId);
        salaryRepository.deductEpf(providentFund,emp);
    }

}
