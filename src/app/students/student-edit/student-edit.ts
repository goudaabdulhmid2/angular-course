import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IStudent } from '../../models/istudent';

@Component({
  selector: 'app-student-edit',
  imports: [],
  templateUrl: './student-edit.html',
  styleUrl: './student-edit.css',
})
export class StudentEdit {
  @Input()
  student!:IStudent

  @Output()
  studentUpdated = new EventEmitter<IStudent>()


  saveStudent(id:number, name:string, age:number){
    this.studentUpdated.emit({
      id,
      name,
      age
    })
  }
}
