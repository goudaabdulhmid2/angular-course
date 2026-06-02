import { Component, EventEmitter, Output } from '@angular/core';
import { IStudent } from '../../models/istudent';

@Component({
  selector: 'app-student-add',
  imports: [],
  templateUrl: './student-add.html',
  styleUrl: './student-add.css',
})
export class StudentAdd {
  @Output()
  studentAdded = new EventEmitter<IStudent>();

  addStudent(id: number, name: string, age: number): void {
    this.studentAdded.emit({
      id,
      name,
      age,
     });
  }
}
