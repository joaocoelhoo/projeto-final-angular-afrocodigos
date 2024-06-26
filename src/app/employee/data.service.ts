import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Employee {
	id: number;
	name: string;
	position: string;
}

@Injectable({
  	providedIn: 'root'
})
export class DataService {
	private apiUrl = 'http://localhost:3000/employees';
	
  constructor(private httpClient: HttpClient) { }

	get<Employee>(): Observable<Employee[]> {
		return this.httpClient.get<Employee[]>(this.apiUrl);
	}

	post<Employee>(employee: Omit<Employee, "id">): Observable<Employee> {
		return this.httpClient.post<Employee>(this.apiUrl, employee);
	}

	put<Employee>(employee: Employee): Observable<Employee>{
		return this.httpClient.put<Employee>(`${this.apiUrl}`, employee);
	}

	delete<Employee>(id: number): Observable<void>{
		return this.httpClient.delete<void>(`${this.apiUrl}-${id}`);
	}

}
