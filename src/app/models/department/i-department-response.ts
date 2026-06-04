import { IDepartment } from "./i-department";

export interface IDepartmentResponse {
  status:string;

      results:number;

      data:{
        docs:IDepartment
      }
}
