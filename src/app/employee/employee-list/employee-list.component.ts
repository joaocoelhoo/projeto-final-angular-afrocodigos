import { Component } from '@angular/core';
import { DataService, Employee } from '../data.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
	employees: Employee[] = [];
	
	constructor(private dataService: DataService) {}

	ngOnInit(): void {
		this.loadEmployees();
	  }
		
	  loadEmployees(): void {
			this.dataService.get<Employee>().subscribe((data) => {
				this.employees = data;
			});
	  }
		
		deleteEmployee(id: number): void {
		this.dataService.delete(id).subscribe(() => {
			this.loadEmployees();
		});
		
	  }
}
