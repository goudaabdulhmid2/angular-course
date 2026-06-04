import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDepartmentsResponse } from '../models/department/i-departments-response';
import { IDepartmentResponse } from '../models/department/i-department-response';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:5000/api/v1/departments'

  getDepartments(): Observable<IDepartmentsResponse>{
    return this.http.get<IDepartmentsResponse>(this.apiUrl)
  }

  getDepartment(id:string): Observable<IDepartmentResponse>{
    return this.http.get<IDepartmentResponse>(`${this.apiUrl}/${id}`)
  }
}
