import { Injectable, signal } from '@angular/core';
import { IStudent } from '../models/istudent';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students = signal<IStudent[]>([
  { id:1,name:'Ahmed',age:24 },
  { id:2,name:'Abdulhamid',age:24 },
  { id:3,name:'Malak',age:7 }
]);

  getStudents(){
    return this.students
  }

  getStudent(id:number){
    console.log(id)
    return this.students().find((stud)=>stud.id === id);
  }

  addStudent(student:IStudent){

    this.students.update((currentStudent)=> [...currentStudent, student])
  }

  updateStudent(id:number, newData:IStudent){
  
      this.students.update((currentStudents)=> 
        currentStudents.map((student)=> student.id === id ? newData : student)
      )
    
  }
}
