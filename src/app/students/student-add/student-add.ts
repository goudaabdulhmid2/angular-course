import { Component, EventEmitter, inject, OnInit, Output, signal } from '@angular/core';
import { IStudent } from '../../models/istudent';
import { StudentService } from '../../services/student-service';
import { DepartmentService } from '../../services/department-service';
import { IDepartment } from '../../models/department/i-department';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-add',
  imports: [],
  templateUrl: './student-add.html',
  styleUrl: './student-add.css',
})
export class StudentAdd implements OnInit {
  studentService = inject(StudentService)
  departmentService = inject(DepartmentService)
  router = inject(Router)
    departments = signal<IDepartment[] | undefined>(undefined)


  ngOnInit(): void {
    this.departmentService.getDepartments()
          .pipe(
            map(res=>res.data.docs)
          )
          .subscribe(depts=>{
            this.departments.set(depts)
          })
  }


  onSubmit(name:string, age:number, department?: string){
    this.studentService.addStudent(name, age, department)
      .subscribe(res => {
        // navigate to students list after add
        this.router.navigate(['/students']);
      });
  }
}
