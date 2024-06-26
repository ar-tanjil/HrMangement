import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Claim, ClaimCategory } from 'src/app/model/claim/claim.model';
import { EmployeeTable } from 'src/app/model/employee/employee.model';
import { ClaimFormComponent } from './claim-form/claim-form.component';
import { auto } from '@popperjs/core';
import { CategoryFormComponent } from './category-form/category-form.component';
import { ClaimDatasource } from 'src/app/model/claim/claim.datasource';
import { ToastrService } from 'ngx-toastr';
import { JWTTokenService } from 'src/app/model/authentication/jwtToken.service';
import { EmployeeDatasource } from 'src/app/model/employee/employee.datasource';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.scss']
})
export class ClaimComponent implements OnInit {

  employeeList: EmployeeTable[];
  claimList: Claim[];
  categoryList: ClaimCategory[];
  admin: boolean = false;

  constructor(
    private dialog: MatDialog,
    private claimData: ClaimDatasource,
    private empData: EmployeeDatasource,
    private toaster: ToastrService,
    private jwtService: JWTTokenService
  ) {
    this.employeeList = new Array<EmployeeTable>();
    this.claimList = new Array<Claim>();
    this.categoryList = new Array<ClaimCategory>();
    this.admin = jwtService.getRole() == "ADMIN";
  }



  ngOnInit(): void {
    this.getAllCategory();
    this.getAllClaim();
    this.getAllEmployeeList();
  }

  getAllCategory() {
    this.claimData.getAllClaimCategory().subscribe(c => {
      this.categoryList = c;
    })
  }


  getAllClaim() {
    this.claimData.getAllClaim().subscribe(c => {
      this.claimList = c;
    })
  }



  searchForm: FormGroup = new FormGroup({
    employeeId: new FormControl()
  })

  search() {
    this.claimData.getClaimlByEmoyeeId(this.searchForm.value.employeeId).subscribe(c => {
      this.claimList = c;
    })
  }

  getAllEmployeeList() {
    this.empData.getAll().subscribe(list => {
      this.employeeList = list;
    })
  }


  openClaimDialog() {
    let addSalaryDialog = this.dialog.open(ClaimFormComponent, {
      height: auto,
      width: auto,
      data: {
        id: null
      }
    }
    );
    addSalaryDialog.afterClosed().subscribe(ob => {
      this.getAllClaim();
    })
  }

  openCategoyrDialog() {
    let addSalaryDialog = this.dialog.open(CategoryFormComponent, {
      height: auto,
      width: auto,
      data: {
        id: null
      }
    }
    );
    addSalaryDialog.afterClosed().subscribe(ob => {
      this.getAllCategory()
    })
  }


  acceptClaim(id: number) {
    if (id < 0) {
      return;
    }
    this.claimData.acceptClaim(id).subscribe(b => {
      this.getAllClaim();
    });
  }

  rejectClaim(id: number) {
    if (id < 0) {
      return;
    }

    this.claimData.rejectClaim(id).subscribe(b => {
      this.getAllClaim();
    })

  }

  buttonShow(claimStatus: string, category?: string) {
    if (claimStatus == 'ONPROCESS' || claimStatus == 'PAYMENT') {
      return false;
    } 
    if(claimStatus == "APPROVED" && category == "LOAN"){
      return false;
    }
    return true;
  }


}
