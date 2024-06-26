// import { Injectable } from "@angular/core";
// import { Department, DepartmentChart } from "./deparment";
// import { Observable, ReplaySubject } from "rxjs";
// import { DepDatasource } from "./department.datasource";

// @Injectable()
// export class DepModel {


//     private departments: Department[];
//     private locator = (employee: Department, id?: number) => employee.id == id;
//     private replaySubject: ReplaySubject<Department[]>;
//     private replaySubject2: ReplaySubject<DepartmentChart[]>;

//     chartData: DepartmentChart[];

//     constructor(private datasouce: DepDatasource) {
//         this.departments = new Array<Department>();
//         this.replaySubject = new ReplaySubject<Department[]>(1);
//         this.datasouce.getAll().subscribe(emp => {
//             this.departments = emp;
//             this.replaySubject.next(emp);
//             this.replaySubject.complete();
//         })

//         this.chartData = new Array<DepartmentChart>();
//         this.replaySubject2 = new ReplaySubject<DepartmentChart[]>(1);
//         this.datasouce.getChatData().subscribe(data => {
//             this.chartData = data;
//             this.replaySubject2.next(data);
//             this.replaySubject2.complete();
//             console.log(data);
            
//         })

//     }


//  getChartData():DepartmentChart[]{
//     return this.chartData;
//  }

//     getDepartments(): Department[] {
//         return this.departments;
//     }

//     getDepartment(id: number): Department | undefined {
//         return this.departments.find((dep) => this.locator(dep, id));
//     }

//     getDepartmentObservable(id: number): Observable<Department | undefined> {
//         let subject = new ReplaySubject<Department | undefined>(1);
//         this.replaySubject.subscribe(emp => {
//             subject.next(emp.find(e => this.locator(e, id)));
//             subject.complete();
//         })
//         return subject;
//     }

//     deleteDepartment(id: number) {
//         this.datasouce.delete(id).subscribe(() => {
//             let index = this.departments.findIndex(dep => this.locator(dep, id));
//             if (index > -1) {
//                 this.departments.splice(index, 1);
//             }
//         })
//     }

//     saveDepartment(department: Department) {
//         if (department.id == 0 || department.id == null) {
//             this.datasouce.save(department)
//                 .subscribe(dep => {
//                     this.departments.push(dep)
//                 });
//         } else {
//             this.datasouce.update(department)
//                 .subscribe(dep => {
//                     let index = this.departments.findIndex(item => {
//                         this.locator(item, dep.id);
//                     });

//                     this.departments.splice(index, 1, dep);
//                 })
//         }
//     }

//     // The orginal method

//     getOrgDepartment(id: number): Observable<Department> {
//         return this.datasouce.getById(id);
//     }
// }