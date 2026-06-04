import { IDepartment } from "./department/i-department";

export interface IStudentDetails {
  _id: string;
  name: string;
  age: number;
  department: IDepartment;
}
