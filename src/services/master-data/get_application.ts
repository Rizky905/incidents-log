// import axios from "axios";

// import url from "@/config/url";
// import { Application } from "@/types/data";

// interface ApiResponse {
//   status: number;
//   posts: Application[];
// }

// export async function get_application() {
//   const response = await axios.get<ApiResponse>(
//     "http://localhost/incidents-log-api/api/application"
//   );
//   return response.data;
// }

import axios from "axios";
import { Application } from "@/types/data";
import { GetApplicationResponse } from "@/types/response";

const baseURL = "http://localhost/incidents-log-api/api/";

const instance = axios.create({
  baseURL,
});

export async function get_application(): Promise<Application[]> {
  const response = await instance.get<GetApplicationResponse>(`/application`);
  return response.data.posts;
}
