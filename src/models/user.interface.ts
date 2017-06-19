import {UUID} from "angular2-uuid";
export interface User {
  id: UUID;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}
