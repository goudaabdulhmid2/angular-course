import { Component, inject, signal } from '@angular/core';
import { NgClass } from '@angular/common';

import { IStudent } from '../models/istudent';
import { StudentDetails } from './student-details/student-details';
import { StudentAdd } from './student-add/student-add';
import { StudentEdit } from './student-edit/student-edit';
import { StudentService } from '../services/student-service';

@Component({
  selector: 'app-students',
  imports: [StudentDetails,StudentAdd,StudentEdit, NgClass],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {
  studentService = inject(StudentService);
  students = this.studentService.getStudents();

selectedStudent = signal<IStudent | undefined>(
  undefined
);

 selectStudent(student:IStudent){
  this.selectedStudent.set(student);
 }

 disappear(){
  this.selectedStudent.set(undefined);
 }


}
