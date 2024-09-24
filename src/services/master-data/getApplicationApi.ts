// using Axios
import axios from "axios";
import { Application } from "@/types/data";
import { GetApplicationResponse } from "@/types/response";

const baseURL = "http://localhost/incidents-log-api/api/";

const instance = axios.create({
  baseURL,
});

export async function getApplicationApi(): Promise<Application[]> {
  const response = await instance.get<GetApplicationResponse>(`/application`);
  console.log(response.data.datas);
  return response.data.datas;
}

// import { Application } from "@/types/data";
// import { GetApplicationResponse } from "@/types/response";

// export async function getApplicationApi(): Promise<Application[]> {
//   const response = await fetch(
//     `http://localhost/incidents-log-api/api/application`
//   );
//   if (response.status !== 200) return [];
//   const result: Application[] = await response.json();
//   return result;
// }
