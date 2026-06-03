import { Component, EventEmitter, inject, Output } from '@angular/core';
import { IStudent } from '../../models/istudent';
import { StudentService } from '../../services/student-service';

@Component({
  selector: 'app-student-add',
  imports: [],
  templateUrl: './student-add.html',
  styleUrl: './student-add.css',
})
export class StudentAdd {
  studentService = inject(StudentService)

  onSubmit(id:number, name:string, age:number){
    const newStudent: IStudent = {
      id,
      name,
      age
    }

    this.studentService.addStudent(newStudent);
  }
}
