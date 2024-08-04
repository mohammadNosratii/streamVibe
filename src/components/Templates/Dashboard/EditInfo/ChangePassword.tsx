import { SubmitHandler, useForm } from "react-hook-form";
import { changePasswordProps } from "../../../../interfaces/changePassword.interface";
import { Button, Input } from "@nextui-org/react";
import EyeSlashIcon from "../../../../assets/icons/EyeSlash";
import EyeIcon from "../../../../assets/icons/Eye";
import { useState } from "react";
import { useChangePasswordApi } from "../../../../hooks/api/usePasswordApi";

export default function ChangePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm<changePasswordProps>();

  const { mutate, isPending } = useChangePasswordApi(reset);

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isPassword2Visible, setIsPassword2Visible] = useState<boolean>(false);

  const togglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const togglePassword2 = () => {
    setIsPassword2Visible(!isPassword2Visible);
  };

  const submitFormHandler: SubmitHandler<changePasswordProps> = (data) => {
    mutate(data);
  };
  return (
    <form onSubmit={handleSubmit(submitFormHandler)} className="space-y-4">
      <div className="grid 3xs:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
        <Input
          classNames={{
            mainWrapper: ["bg-transparent outline-none rounded-2xl"],
            inputWrapper: [
              "bg-transparent border-1 dark:border-black-15 rounded-2xl",
            ],
            input: ["bg-transparent"],
            innerWrapper: ["bg-transparent"],
          }}
          size="sm"
          label="Current Password"
          {...register("current_password", {
            required: "Current Password could not be empty",
            minLength: { value: 8, message: "At Least Enter 8 Character" },
          })}
          errorMessage={errors.current_password?.message}
          isInvalid={Boolean(errors.current_password)}
        />
        <Input
          classNames={{
            mainWrapper: ["bg-transparent outline-none rounded-2xl"],
            inputWrapper: [
              "bg-transparent border-1 dark:border-black-15 rounded-2xl",
            ],
            input: ["bg-transparent"],
            innerWrapper: ["bg-transparent"],
          }}
          size="sm"
          type={`${isPasswordVisible ? "text" : "password"}`}
          label="New Password"
          {...register("new_password", {
            required: "New Password could not be empty",
            minLength: { value: 8, message: "At Least Enter 8 Character" },
            validate: (value) =>
              value !== getValues("current_password") || "New Password could not be the same as your current passowrd"
          })}
          endContent={
            <div className="cursor-pointer" onClick={togglePassword}>
              {isPasswordVisible ? <EyeSlashIcon /> : <EyeIcon />}
            </div>
          }
          errorMessage={errors.new_password?.message}
          isInvalid={Boolean(errors.new_password)}
        />
        <Input
          classNames={{
            mainWrapper: ["bg-transparent outline-none rounded-2xl"],
            inputWrapper: [
              "bg-transparent border-1 dark:border-black-15 rounded-2xl",
            ],
            input: ["bg-transparent"],
            innerWrapper: ["bg-transparent"],
          }}
          size="sm"
          type={`${isPassword2Visible ? "text" : "password"}`}
          label="Confirm Password"
          {...register("re_new_password", {
            required: "Confirm Password could not be empty",
            minLength: { value: 8, message: "At Least Enter 8 Character" },
            validate: (value) =>
              value === getValues("new_password") || "Passwords do not match",
          })}
          endContent={
            <div className="cursor-pointer" onClick={togglePassword2}>
              {isPassword2Visible ? <EyeSlashIcon /> : <EyeIcon />}
            </div>
          }
          errorMessage={errors.re_new_password?.message}
          isInvalid={Boolean(errors.re_new_password)}
        />
      </div>
      <div className="flex items-center gap-2">
        <Button
          className="bg-red-45 dark:bg-red-45/80 text-white"
          type="submit"
          isLoading={isPending}
        >
          Change Password
        </Button>
        <Button onClick={() => reset()}>Discard</Button>
      </div>
    </form>
  );
}
