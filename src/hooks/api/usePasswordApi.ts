import { useMutation } from "@tanstack/react-query";
import { changePasswordProps } from "../../interfaces/changePassword.interface";
import { changePasswordApi } from "../../services/api/passwordApi";
import toast from "react-hot-toast";

export const useChangePasswordApi = (reset: () => void) => {
  return useMutation({
    mutationFn: (payload: changePasswordProps) => changePasswordApi(payload),
    onSuccess: () => {
      toast.success("Your Password has been changed successfully");
      reset();
    },
  });
};