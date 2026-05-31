import { Component } from '@angular/core';

import { IStudent } from '../models/istudent';

@Component({
  selector: 'app-students',
  imports: [],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {
  students: IStudent[] = [
    { id: 1, name: 'Ahmed', age: 24 },
    { id: 2, name: 'Abdulhamid', age: 24 },
    { id: 3, name: 'Malak', age: 7 },
  ];

  addStudent(id: number, name: string, age: number): void {
    this.students.push({
      id,
      name,
      age,
     });
  }
}
