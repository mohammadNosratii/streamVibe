import { useQuery } from "@tanstack/react-query";
import { getUserInfoApi } from "../../services/api/userApi";
import { isAuthenticated } from "../../utils/isAuthenticated";

export const useGetUserInfoApi = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => getUserInfoApi().then((data) => data.data),
    enabled: isAuthenticated(),
  });
};
