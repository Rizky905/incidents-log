import { Application } from "./data";

export type GetApplicationResponse = {
  success: boolean;
  message: string;
  posts: Application[];
};
