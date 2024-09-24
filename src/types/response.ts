import { Application } from "./data";

export type GetApplicationResponse = {
  success: boolean;
  message: string;
  datas: Application[];
};
