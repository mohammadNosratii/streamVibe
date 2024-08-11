import { Button, Input } from "@nextui-org/react";
import MailIcon from "../../../assets/icons/Mail";
import EyeIcon from "../../../assets/icons/Eye";
import UserCircle from "../../../assets/icons/UserCircle";
import { useState } from "react";
import EyeSlashIcon from "../../../assets/icons/EyeSlash";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "@tanstack/react-router";
import { useRegisterApi } from "../../../hooks/api/useAuthApi";
import { registerUserProps } from "../../../interfaces/registerUser.interface";
import { emailRegex } from "../../../utils/combineEmailAndPhoneRegex";

export default function Register() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<registerUserProps>();

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isPassword2Visible, setIsPassword2Visible] = useState<boolean>(false);

  const { mutate, isPending } = useRegisterApi();

  const togglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const togglePassword2 = () => {
    setIsPassword2Visible(!isPassword2Visible);
  };

  const submitRegisterFormHandler: SubmitHandler<registerUserProps> = (
    data
  ) => {
    mutate(data);
  };

  return (
    <div className="w-full">
      <h1 className="text-3xl md:text-5xl font-manropeBold dark:text-white mb-4">
        Register
      </h1>
      <p className="font-manropeMedium text-gray-60">Create a new account</p>
      <form
        onSubmit={handleSubmit(submitRegisterFormHandler)}
        className="flex flex-col gap-4 items-center mt-12 child:w-full"
      >
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
          type="text"
          label="Username"
          {...register("username", {
            required: "Username could not be empty",
            pattern: {
              value: /^[a-z0-9_-]{3,320}$/g,
              message: "Username is not valid"
            },
            minLength: {
              value: 3,
              message: "At least 3 characters needed"
            },
            maxLength: {
              value: 320,
              message: "Maximum 320 characters needed"
            },
          })}
          endContent={<UserCircle />}
          errorMessage={errors.username?.message}
          isInvalid={Boolean(errors.username)}
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
          type="email"
          label="Email"
          {...register("email", {
            required: "Email could not be empty",
            pattern: {
              value: emailRegex,
              message: "Email is not valid",
            },
            maxLength: {
              value: 320,
              message: "Maximum 320 characters needed"
            },
          })}
          endContent={<MailIcon />}
          errorMessage={errors.email?.message}
          isInvalid={Boolean(errors.email)}
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
          label="Password"
          {...register("password", {
            required: "Password could not be empty",
            minLength: {
              value: 6,
              message: "At least 6 characters needed"
            },
            maxLength: {
              value: 128,
              message: "Maximum 128 characters needed"
            },
          })}
          endContent={
            <div className="cursor-pointer" onClick={togglePassword}>
              {isPasswordVisible ? <EyeSlashIcon /> : <EyeIcon />}
            </div>
          }
          errorMessage={errors.password?.message}
          isInvalid={Boolean(errors.password)}
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
          {...register("re_password", {
            required: "Confirm Password could not be empty",
            minLength: { value: 8, message: "At Least Enter 8 Character" },
            validate: (value) =>
              value === getValues("re_password") || "Passwords do not match",
          })}
          endContent={
            <div className="cursor-pointer" onClick={togglePassword2}>
              {isPassword2Visible ? <EyeSlashIcon /> : <EyeIcon />}
            </div>
          }
          errorMessage={errors.re_password?.message}
          isInvalid={Boolean(errors.re_password)}
        />
        <Button
          isLoading={isPending}
          type="submit"
          className="dark:bg-mainLight text-black-6"
        >
          Continue
        </Button>
        <p className="text-gray-60 text-sm text-center">
          Already have an acount?{" "}
          <Link to="/login" className="underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
