import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReplaySubject } from 'rxjs';
import { PayrollDatasource } from 'src/app/model/payroll/payroll.datasouce';
import { PayrollTable, Salary } from 'src/app/model/payroll/payroll.model';
import { AddSalaryComponent } from './add-salary/add-salary.component';
import { auto } from '@popperjs/core';
import { SalaryDetailsComponent } from './salary-details/salary-details.component';
import { PayslipComponent } from './payslip/payslip.component';
import { loadTranslations } from '@angular/localize';
import { JWTTokenService } from 'src/app/model/authentication/jwtToken.service';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.scss']
})
export class PayrollComponent implements OnInit {
  admin: boolean = false;
  month!: number;
  year!: number;
  salaryTable: Salary[];
  private locator = (payroll: PayrollTable, id?: number) => payroll.employeeId == id;
  private replaySubject: ReplaySubject<Salary[]>;


  constructor(private model: PayrollDatasource, 
    private dialog: MatDialog,
    private jwtService: JWTTokenService) {
    this.lastMonth();
    this.salaryTable = new Array<Salary>();
    this.replaySubject = new ReplaySubject<Salary[]>();
    this.admin = jwtService.getRole() == "ADMIN";
  }




  ngOnInit(): void {
    this.getAllSalary();
  }


  refresh(){
    this.model.deleteAllPayroll().subscribe(() => {

    })
}

  lastMonth() {
    let date: Date = new Date();
    let month: number = date.getMonth();
    let year: number = date.getFullYear();
    if (month < 0) {
      month += 12;
      year -= 1;
    }
    this.month = month + 1;
    this.year = year;
  }


  openDialog() {
    let addSalaryDialog = this.dialog.open(AddSalaryComponent, {
      height: auto,
      width: auto,
      data: {
        id: null
      }
    }
    );
    addSalaryDialog.afterClosed().subscribe(ob => {
      this.getAllSalary();
    })
  }

  updateDialog(id: number){
    if(id < 0){
      return;
    }

    let addSalaryDialog = this.dialog.open(AddSalaryComponent, {
      height: auto,
      width: auto,
      data: {
        id: id
      }
    }
    );
    addSalaryDialog.afterClosed().subscribe(ob => {
      this.getAllSalary();
    })
  }

  salaryDetails(id: number){
    if(id < 0){
      return;
    }

    let addSalaryDialog = this.dialog.open(SalaryDetailsComponent, {
      height: auto,
      width: auto,
      data: {
        id: id
      }
    }
    );
    addSalaryDialog.afterClosed().subscribe(ob => {
    })
  }


  getAllSalary() {
    this.model.getAllSalary().subscribe(emp => {
      this.salaryTable = emp;
      this.replaySubject.next(emp);
      this.replaySubject.complete();
    })
  }



  generatePayslip(id: number){
    if(id < 0){
      return;
    }

    let addSalaryDialog = this.dialog.open(PayslipComponent, {
      height: auto,
      width: "70%"
      ,
      data: {
        id: id
      }
    }
    );
    addSalaryDialog.afterClosed().subscribe(ob => {
    })
  }







  // getAllPayrollByPeriod(year: number, month: number) {
  //   this.model.getAllByPeriod(year, month).subscribe(pay => {
  //     this.payTable = pay;
  //     this.replaySubject.next(pay);
  //     this.replaySubject.complete();
  //   })
  // }

}
