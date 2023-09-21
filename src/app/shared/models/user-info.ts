import { ICode } from './code';

export interface IUserInfo {
  id: string;
  firstname: string;
  lastname: string;
  employeeNumber: string;
  fullname: string;
  lastLogon: Date;
  logonCount: number;
  role: ICode;
  permission: ICode;
  unit: ICode;
}
