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


  public employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { };

  //whwnever intialized this will start.
  ngOnInit() {
    this.getEmployees();
  }

  onAddEmloyee(employee: Employee) {

  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe({
      next: (response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  //the mode will tell me what i am going to do like add, edit, etc
  public onOpenModal(employee: Employee, mode: string) {

    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    // adding the toggle modal to the button
    button.setAttribute('data-toggle', 'modal');
    if(mode === 'add') {
      button.setAttribute('data-target', 'addEmployeeModal');
    }
  }
}
