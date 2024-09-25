import { Application } from "./data";

export type GetApplicationResponse = {
  success: boolean;
  messages: string;
  total: number;
  datas: Application[];
};
