import { inject, Injectable, signal } from '@angular/core';
import { IStudent } from '../models/istudent';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStudentsResponse } from '../models/i-students-response';
import { IStudentResponse } from '../models/i-student-response';

export interface IStudentUpdate {
  name:string,
  age:number,
  department:string
}

@Injectable({
  providedIn: 'root',
})
export class StudentService {
   private http = inject(HttpClient);
   private apiUrl = 'http://localhost:5000/api/v1/students'

  getStudents() : Observable<IStudentsResponse>{
    return this.http.get<IStudentsResponse>(this.apiUrl)
  }

  getStudent(id:string):Observable<IStudentResponse>{

    return this.http.get<IStudentResponse>(`${this.apiUrl}/${id}`)
  }

  addStudent(name:string, age:number, department?:string) : Observable<IStudentResponse>{
    const payload: any = { name, age };
    if(department) payload.department = department;

    return this.http.post<IStudentResponse>(this.apiUrl, payload)

  }

  updateStudent(id:string, updatedData:IStudentUpdate): Observable<IStudentResponse>{

      return this.http.patch<IStudentResponse>(`${this.apiUrl}/${id}`, updatedData)

  }

  deleteStudent(id:string):Observable<null>{
    return this.http.delete<null>(`${this.apiUrl}/${id}`)
  }
}
