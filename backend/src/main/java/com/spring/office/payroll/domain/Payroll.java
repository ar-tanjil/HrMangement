package com.spring.office.payroll.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.spring.office.domain.BaseModel;
import com.spring.office.employee.Employee;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.time.YearMonth;
import java.util.HashSet;
import java.util.Set;

@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@Entity
public class Payroll extends BaseModel {

    private YearMonth period;
    private double netSalary;
    private double grossSalary;
    private double basicSalary;
    private double unpaidLeave;
    private double tax;
    private double taxInformation;
    private double loanPayment;
    private double bonusAmount;
    private double providentFund;
    private double providentInformation;
    private double medicalAllowance;
    private double medicalInformation;
    private double travelInformation;
    private double travelAllowance;
    private double reimbursement;
    private double otherDeduction;
    private int workingDay;
    private int unpaidLeaveDay;
    private int totalLeaveDay;
    private double fine;
    private int fineDay;

    @Enumerated(EnumType.STRING)
    private PayrollStatus status;

    @ManyToOne
    @JoinColumn(name = "employee_id")
    private Employee employee;


}
