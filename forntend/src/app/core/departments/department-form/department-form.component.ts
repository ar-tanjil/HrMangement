import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DepDatasource } from 'src/app/model/department/dep.datasource';
import { Department } from 'src/app/model/department/deparment';
import { DepModel } from 'src/app/model/department/department.model';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.scss']
})
export class DepartmentFormComponent {

  title: string = ""
  department: Department = new Department();
  editing: boolean = false;
  constructor(
    private depData: DepDatasource,
    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: { id: number },
    public dialogRef: MatDialogRef<DepartmentFormComponent>
  ) {

      if (this.data.id) {
        this.depData.getById(this.data.id).subscribe(dep => {
          this.department = dep;
          this.departmentForm.patchValue(this.department);
        })
      }
  }


  departmentForm: FormGroup = new FormGroup({
    id: new FormControl(),
    departmentName: new FormControl("", Validators.required),
    managerId: new FormControl(),
    mangagerName: new FormControl(),
    departmentDesc: new FormControl()
  })

  submitForm() {
    if (this.departmentForm.valid) {
      Object.assign(this.department, this.departmentForm.value);
      this.departmentForm.reset();
      if (this.department.id) {
        this.depData.update(this.department).subscribe(dep => {
          this.dialogRef.close(dep);

        })
      } else {
        this.depData.save(this.department).subscribe(dep => {
          this.dialogRef.close(dep);
        })
      }

    }
  }

}