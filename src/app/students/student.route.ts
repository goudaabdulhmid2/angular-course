import { Routes } from '@angular/router';

export const STUDENT_ROUTES: Routes = [

  {
    path: '',
    loadComponent: () =>
      import('./students')
        .then(c => c.Students)
  },

  {
    path: 'add',
    loadComponent: () =>
      import('./student-add/student-add')
        .then(c => c.StudentAdd)
  },

  {
    path: ':id',
    loadComponent: () =>
      import('./student-details/student-details')
        .then(c => c.StudentDetails)
  },

  {
    path: 'edit/:id',
    loadComponent: () =>
      import('./student-edit/student-edit')
        .then(c => c.StudentEdit)
  }

];
