// using Axios
import axios from "axios";
import { Application } from "@/types/data";
import { GetApplicationResponse } from "@/types/response";
import { useQuery } from "@tanstack/react-query";

const baseURL = "http://localhost/incidents-log-api/api/";

const instance = axios.create({
  baseURL,
});

type apiParam = {
  page: number;
  limit: number;
};

// export async function getApplicationApi({ page, limit }: apiParam): Promise<{
//   data: Application[];
//   total: number;
// }> {
//   // const start = (page - 1) * limit;

//   const response = await instance.get<GetApplicationResponse>(
//     `/application?page=${page}&limit=${limit}`
//   );

//   return {
//     data: response.data.datas,
//     total: response.data.total,
//   };
// }

const getApplicationApi = async ({
  page,
  limit,
}: apiParam): Promise<{
  data: Application[];
  total: number;
}> => {
  const offset = (page - 1) * limit;
  const response = await fetch(
    `http://localhost/incidents-log-api/api/application?_offset=${offset}&_limit=${limit}`
  );
  const result = await response.json();

  return {
    data: result.datas,
    total: result.total,
  };
};

export const useApplication = (param: apiParam) =>
  useQuery({
    queryKey: ["application"],
    queryFn: () => getApplicationApi(param),
  });

// const { data, error, isLoading } = useQuery({
//   queryKey: ["application"],
//   queryFn: api,
// });

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
