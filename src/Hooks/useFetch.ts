import { useQuery } from "@tanstack/react-query";
import { fetchData } from "src/utils/api";

export const useFetch = (endPoint: string) => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: [endPoint],
    queryFn: () => fetchData(endPoint),
  });
  return { isLoading, isError, data, error };
};
