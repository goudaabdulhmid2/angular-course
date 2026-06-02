import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';

import { IStudent } from '../models/istudent';
import { StudentDetails } from './student-details/student-details';
import { StudentAdd } from './student-add/student-add';
import { StudentEdit } from './student-edit/student-edit';

@Component({
  selector: 'app-students',
  imports: [StudentDetails,StudentAdd,StudentEdit, NgClass],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {
 students = signal<IStudent[]>([
  { id:1,name:'Ahmed',age:24 },
  { id:2,name:'Abdulhamid',age:24 },
  { id:3,name:'Malak',age:7 }
]);

selectedStudent = signal<IStudent | undefined>(
  undefined
);

 selectStudent(student:IStudent){
  this.selectedStudent.set(student);
 }

 disappear(){
  this.selectedStudent.set(undefined);
 }

 addStudentToList(student:IStudent){
  this.students().push(student)
 }

 updateStudent(updatedStudent:IStudent){
  let idx = this.students().findIndex((stud)=> stud.id === updatedStudent.id)

  if(idx !== -1)
    this.students()[idx] = updatedStudent
 }


}
