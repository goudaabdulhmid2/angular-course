import { Component, computed, inject, input, Input,signal } from '@angular/core';
import { IStudent } from '../../models/istudent';
import { StudentService } from '../../services/student-service';

@Component({
  selector: 'app-student-details',
  imports: [],
  templateUrl: './student-details.html',
  styleUrl: './student-details.css',
})
export class StudentDetails {
  studentService = inject(StudentService);

  studentId = input.required<number>();

  student = computed(()=>
    this.studentService.getStudent(this.studentId())
  )
}
