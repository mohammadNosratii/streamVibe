import { useQuery } from "@tanstack/react-query";
import { getUserInfoApi } from "../../services/api/userApi";

export const useGetUserInfoApi = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => getUserInfoApi().then((data) => data.data),
  });
};
