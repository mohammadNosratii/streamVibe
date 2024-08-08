import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserInfoApi, putUserInfoApi } from "../../services/api/userApi";
import { isAuthenticated } from "../../utils/isAuthenticated";
import { editInfoProps } from "../../interfaces/editInfo.interface";
import { UseFormResetField } from "react-hook-form";
import toast from "react-hot-toast";

export const useGetUserInfoApi = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => getUserInfoApi().then((data) => data.data),
    enabled: isAuthenticated(),
  });
};

export const usePutUserInfoApi = (
  resetField: UseFormResetField<editInfoProps>
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: editInfoProps) => putUserInfoApi(payload),
    onSuccess: () => {
      toast.success("Your Info has been updated");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: () => {
      resetField("phone");
    },
  });
};
