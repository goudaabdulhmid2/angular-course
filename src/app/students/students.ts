import { Component, inject, OnInit, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

import { IStudent } from '../models/istudent';
import { StudentService } from '../services/student-service';
import { map } from 'rxjs';

@Component({
  selector: 'app-students',
  imports: [NgClass, RouterLink],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students implements OnInit{
  studentService = inject(StudentService);
  students = signal<IStudent[]>([]);

  ngOnInit(): void {
    this.studentService.getStudents().pipe(
      map(res => res.data.docs)
    ).subscribe(students => {
      this.students.set(students);
    })
  }

selectedStudent = signal<IStudent | undefined>(
  undefined
);

 selectStudent(student:IStudent){
  this.selectedStudent.set(student);
 }



}
