package com.spring.office.job;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.spring.office.domain.BaseModel;
import com.spring.office.employee.Employee;
import com.spring.office.job.Job;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.time.LocalDate;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@Entity
public class JobHistory extends BaseModel {

    private LocalDate startDate;
    private LocalDate endDate;

    @ManyToOne()
    @JoinColumn(name = "job_id")
    private Job job;

    @ManyToMany(mappedBy = "jobHistory")
    @JsonIgnore
    private List<Employee> employees;

}
