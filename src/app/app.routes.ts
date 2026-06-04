import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'students',
    pathMatch: 'full'

  },
  {
    path:'students',
    loadChildren:()=> import('./students/student.route').then(r => r.STUDENT_ROUTES)
  },
];
