import { Component, computed, inject, input } from '@angular/core';
import { StudentService } from '../../services/student-service';

@Component({
  selector: 'app-student-edit',
  imports: [],
  templateUrl: './student-edit.html',
  styleUrl: './student-edit.css',
})
export class StudentEdit {
  studentId = input.required<number>();
  studentService = inject(StudentService);

  student = computed(()=>{
    return this.studentService.getStudent(this.studentId())
  })

  saveStudent(id:number, name:string, age:number ){
    const newData = {
      id,
      name,
      age
    }
    this.studentService.updateStudent(id,newData)
  }
}
