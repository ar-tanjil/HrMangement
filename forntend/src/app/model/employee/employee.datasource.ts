import { Injectable } from "@angular/core";
import { Employee, EmployeeTable, User } from "./employee.model";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError } from "rxjs";
import { HttpMessage } from "../httpMessage.model";

@Injectable()
export class EmployeeDatasource{

    private url: string = "http://localhost:8080/employees";

    constructor(private http: HttpClient){ };

    getAll(): Observable<EmployeeTable[]>{
        return this.sendRequest<EmployeeTable[]>("GET", this.url);
    }

    getById(id: number): Observable<Employee>{
        return this.sendRequest<Employee>("GET", `${this.url}/${id}`);
    }

    save(emp : Employee):Observable<Employee>{
        return this.sendRequest<Employee>("POST", this.url, emp);
    }

    update(emp: Employee): Observable<Employee>{
        return this.sendRequest<Employee>("PUT", `${this.url}/${emp.id}`, emp);
    }

    delete(id: number): Observable<HttpMessage>{
      return this.sendRequest<HttpMessage>("DELETE", `${this.url}/${id}`);
    }

    getEmpWithoutSal():Observable<EmployeeTable[]>{
        return this.sendRequest<EmployeeTable[]>("GET", `${this.url}/without_sal`);
    }

    getEmpWithoutPolicy():Observable<EmployeeTable[]>{
        return this.sendRequest<EmployeeTable[]>("GET", `${this.url}/without_leave`);
    }

    countEmployee():Observable<number>{
        return this.sendRequest<number>("GET", `${this.url}/count/employee`);
        
    }

    getEmployeeByJob(jobId: number):Observable<EmployeeTable[]>{
        return this.sendRequest<EmployeeTable[]>("GET", `${this.url}/job/${jobId}`);
    }

    getEmployeeByDepartment(departmentId: number):Observable<EmployeeTable[]>{
        return this.sendRequest<EmployeeTable[]>("GET", `${this.url}/department/${departmentId}`);
    }


// ----------------------------------- user

getAllUser():Observable<User[]>{
    return this.sendRequest<User[]>("GET", `${this.url}/all/user`);
}

changeRole(id: number):Observable<void>{
    return this.sendRequest<void>("GET", `${this.url}/change/user/role/${id}`);
}




    private sendRequest<T>(verb: string, url: string, body?: Employee): Observable<T>{
        return this.http.request<T>(verb, url, {
            body: body
        }).pipe(catchError((error: Response) => {
            throw(`Network Error: ${error.statusText} (${error.status})`)
        }));
    }

}