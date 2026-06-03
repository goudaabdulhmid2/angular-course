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

  saveStudent(name:string, age:number ){
    const newData = {
      id: this.studentId(),
      name,
      age
    }
    this.studentService.updateStudent(this.studentId(), newData)
  }
}
