import { Component } from '@angular/core';
import { DataService, Employee } from '../data.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {
	employee: Omit<Employee, "id"> = { name: '', position: '' };

  constructor(
		private	dataService: DataService,

	) {}

	ngOnInit(): void {
	}

	register(): void{
		this.dataService.post<Employee>(this.employee).subscribe(() => {
			this.employee = { name: '', position: '' };
		});
	}
}

