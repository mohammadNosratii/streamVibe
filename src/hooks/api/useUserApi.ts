import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserInfoApi, putUserInfoApi } from "../../services/api/userApi";
import { isAuthenticated } from "../../utils/isAuthenticated";
import { editInfoProps } from "../../interfaces/editInfo.interface";

export const useGetUserInfoApi = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => getUserInfoApi().then((data) => data.data),
    enabled: isAuthenticated(),
  });
};

export const usePutUserInfoApi = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: editInfoProps) => putUserInfoApi(payload),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
};
