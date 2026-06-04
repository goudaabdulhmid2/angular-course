import { IStudent } from "./istudent";

export interface IStudentsResponse {
  status:string;

  results:number;

  data:{
    docs:IStudent[]
  }
}
