import { Button, Input } from "@nextui-org/react";
import MailIcon from "../../../assets/icons/Mail";
import EyeIcon from "../../../assets/icons/Eye";
import UserCircle from "../../../assets/icons/UserCircle";
import { useState } from "react";
import EyeSlashIcon from "../../../assets/icons/EyeSlash";
import { SubmitHandler, useForm } from "react-hook-form";
import { registerFormProps } from "../../../interfaces/registerForm.interface";
import { Link } from "@tanstack/react-router";
import { useRegisterApi } from "../../../hooks/api/useAuthApi";
import AutoCompletePhone from "../../Modules/AutoCompletePhone/AutoCompletePhone";
import PhoneIcon from "../../../assets/icons/Phone";

export default function Register() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<registerFormProps>();

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isPassword2Visible, setIsPassword2Visible] = useState<boolean>(false);

  const { mutate, isPending } = useRegisterApi();

  const togglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const togglePassword2 = () => {
    setIsPassword2Visible(!isPassword2Visible)
  }

  const submitRegisterFormHandler: SubmitHandler<registerFormProps> = (
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
            minLength: { value: 8, message: "At Least Enter 8 Character" },
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
              value: /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g,
              message: "Email is not valid"
            }
          })}
          endContent={<MailIcon />}
        />
        <Input
          startContent={<AutoCompletePhone />}
          endContent={<PhoneIcon />}
          classNames={{
            mainWrapper: ["bg-transparent outline-none rounded-2xl"],
            inputWrapper: [
              "bg-transparent border-1 dark:border-black-15 rounded-2xl h-full ps-0 pe-3",
            ],
            input: ["bg-transparent"],
            innerWrapper: ["bg-transparent"],
          }}
          type="number"
          placeholder="Phone Number"
          {...register("phone")}
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
            minLength: { value: 8, message: "At Least Enter 8 Character" },
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
          {...register("password2", {
            required: "Confirm Password could not be empty",
            minLength: { value: 8, message: "At Least Enter 8 Character" },
            validate: value =>
              value === getValues("password") || "Passwords do not match"
          })}
          endContent={
            <div className="cursor-pointer" onClick={togglePassword2}>
              {isPassword2Visible ? <EyeSlashIcon /> : <EyeIcon />}
            </div>
          }
          errorMessage={errors.password2?.message}
          isInvalid={Boolean(errors.password2)}
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
