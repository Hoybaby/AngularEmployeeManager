import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  public employees: Employee[] = [];;

  constructor(private employeeService: EmployeeService) { };

  //whwnever intialized this will start.
  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): void {
    // this will make a request over the network/internet it is on the obersable
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        // this will be called if the request is successful
        this.employees = response;
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => { 
        alert(error.message);
      }
    );
  }
}
