package com.spring.office.department;

import com.spring.office.chart.domain.DepartmentChart;
import com.spring.office.chart.service.DepartmentChartService;
import com.spring.office.dto.Message;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RequiredArgsConstructor
@RestController
@RequestMapping("/departments")
@CrossOrigin(origins = "http://localhost:4200")
public class DepartmentController {

    private final DepartmentService service;
    private final DepartmentChartService departmentChartService;


    @GetMapping
    public Iterable<DepartmentDto> getAll() {
        return service.getAllDepartment();
    }

    @GetMapping("/{id}")
    public DepartmentDto getById(@PathVariable("id") Long id){
        return service.getDepartmentById(id);
    }

    @PostMapping
    public DepartmentDto saveDepartment(
            @RequestBody DepartmentDto dto){
        return service.saveDepartment(dto);
    }

    @PutMapping("/{id}")
    public DepartmentDto updateEmployee(@PathVariable("id") Long id,
                                        @RequestBody DepartmentDto dto){
        return service.updateDepartment(id,dto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Message> deleteById(@PathVariable("id") Long id){
        boolean success = service.deleteDepartmentById(id);
        if (success){
            Message successMsg = new Message("Success");
            return new ResponseEntity<>(successMsg, HttpStatus.ACCEPTED);
        }
        Message failedMsg = new Message("Not Found");
        return new ResponseEntity<>(failedMsg, HttpStatus.NOT_FOUND);
    }


    @GetMapping("/chart/dep")
    public Iterable<DepartmentChart> getDepChart(){
        return departmentChartService.processDepartmentChart();
    }


}
