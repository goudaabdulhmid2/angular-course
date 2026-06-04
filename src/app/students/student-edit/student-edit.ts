import { Component, computed, inject, input, OnInit, signal } from '@angular/core';
import { IStudentUpdate, StudentService } from '../../services/student-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IStudent } from '../../models/istudent';
import { map } from 'rxjs';
import { JSDocNullableType } from 'typescript';
import { IDepartment } from '../../models/department/i-department';
import { DepartmentService } from '../../services/department-service';



@Component({
  selector: 'app-student-edit',
  imports: [RouterLink],
  templateUrl: './student-edit.html',
  styleUrl: './student-edit.css',
})
export class StudentEdit implements OnInit {
  studentService = inject(StudentService);
  departmentService = inject(DepartmentService)
  router = inject(Router)
  route = inject(ActivatedRoute)
  studentId: string = "";
  student = signal<IStudent | undefined>(undefined)
  departments = signal<IDepartment[] | undefined>(undefined)

  ngOnInit(): void {
    this.studentId = this.route.snapshot.params['id'];
    this.studentService
        .getStudent(this.studentId)
        .pipe(
          map(res => res.data.doc)
        )
        .subscribe(student => {

          this.student.set(student);

        });

    this.departmentService.getDepartments()
      .pipe(
        map(res=>res.data.docs)
      )
      .subscribe(depts=>{
        this.departments.set(depts)
      })

  }

  updateName(value: string){
    const s = this.student();
    if(!s) return;
    this.student.set({ ...s, name: value });
  }

  updateAge(value: string){
    const s = this.student();
    if(!s) return;
    const age = parseInt(value, 10) || 0;
    this.student.set({ ...s, age });
  }

  updateDepartment(deptId: string){
    const s = this.student();
    if(!s) return;
    const dept = this.departments()?.find(d=>d._id === deptId);
    this.student.set({ ...s, department: dept });
  }

  saveUpdate(action: 'save' | 'delete' = 'save') {
    const student = this.student();
    if (!student) return;

    if(action === 'delete'){
      this.studentService.deleteStudent(this.studentId).subscribe(()=>{
        this.router.navigate(['/students']);
      })
      return;
    }

    const updateStudent: IStudentUpdate = {
      name: student.name,
      age: student.age,
      department: student.department?._id || ''
    }

    this.studentService.updateStudent(this.studentId, updateStudent).subscribe(res =>{
        this.router.navigate(['/students',this.studentId])
    })
  }




}
