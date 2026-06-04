import { Component, computed, inject, input, Input,OnInit,Signal,signal } from '@angular/core';
import { IStudent } from '../../models/istudent';
import { StudentService } from '../../services/student-service';
import { StringTokenKind } from '@angular/compiler';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-student-details',
  imports: [RouterLink],
  templateUrl: './student-details.html',
  styleUrl: './student-details.css',
})
export class StudentDetails
implements OnInit {

  private studentService =
    inject(StudentService);

  private route =
    inject(ActivatedRoute);

  private router = inject(Router)

  student =
    signal<IStudent | null>(null);

  studentId: string = ""
  ngOnInit(): void {

    this.studentId =
    this.route.snapshot.params['id'];

    this.studentService
        .getStudent(this.studentId)
        .pipe(
          map(res => res.data.doc)
        )
        .subscribe(student => {

          this.student.set(student);

        });

  }

  deleteStudent(){
    this.studentService.deleteStudent(this.studentId).subscribe((res)=>{
      this.router.navigate(
          ['/students']
        );
    })
  }

}
