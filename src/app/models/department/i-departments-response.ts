import { IDepartment } from "./i-department";

export interface IDepartmentsResponse {
    status:string;

    results:number;

    data:{
      docs:IDepartment[]
    }
  }
