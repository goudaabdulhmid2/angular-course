import { IStudent } from "./istudent"

export interface IStudentResponse {
  status:string,
  data:{
    doc:IStudent
  }
}
