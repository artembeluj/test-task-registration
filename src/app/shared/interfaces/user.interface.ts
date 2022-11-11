import { FlagSelect } from "@shared/interfaces/select.interface";

export interface User {
  userName: string;
  email: string;
  codeCountry: FlagSelect;
  phone: string;
  birthDate: Date;
  country: string;
  webSite: string;
  userPhoto: string;
}