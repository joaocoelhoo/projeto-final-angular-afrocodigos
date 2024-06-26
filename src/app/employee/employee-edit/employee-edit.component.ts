import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Employee } from '../data.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrl: './employee-edit.component.css'
})
export class EmployeeEditComponent {
  employee: Employee = { id: 0, name: '', position: '' };

  constructor(
		private route: ActivatedRoute,
    private	dataService: DataService,
	) {}

  ngOnInit(): void {
    this.employee.id = this.route.snapshot.params['id'];
    this.employee.name = this.route.snapshot.params['name'];
    this.employee.position = this.route.snapshot.params['position'];    
    console.log(this.employee)
	}

  update(): void{
		this.dataService.put<Employee>(this.employee).subscribe(() => {
		});
	}

}
