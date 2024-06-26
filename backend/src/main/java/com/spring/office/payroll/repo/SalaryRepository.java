package com.spring.office.payroll.repo;

import com.spring.office.employee.Employee;
import com.spring.office.payroll.domain.Salary;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface SalaryRepository extends JpaRepository<Salary, Long> {


    Optional<Salary> findByEmployee(Employee employee);


    @Modifying
    @Transactional
    @Query("update Salary s set s.loan = s.loan - :payment " +
            " where s.employee = :emp")
    void deductLoan(double payment, Employee emp);

    @Modifying
    @Transactional
    @Query("update Salary s set s.loan = s.loan + :payment " +
            " where s.employee = :emp")
    void addLoan(double payment, Employee emp);


    @Modifying
    @Transactional
    @Query("update Salary s set s.epf = s.epf + :payment " +
            " where s.employee = :emp")
    void addEpf(double payment, Employee emp);


    @Modifying
    @Transactional
    @Query("update Salary s set s.epf = s.epf - :payment" +
            " where s.employee = :emp")
    void deductEpf(double payment, Employee emp);


    @Query("select sum(s.basic) from Salary s")
    Integer sumAllSalary();

    @Query("select sum(s.epf) from Salary s")
    Integer sumAllEpf();

}
