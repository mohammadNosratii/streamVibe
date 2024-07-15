import { Button, Input } from "@nextui-org/react";
import MailIcon from "../../../assets/icons/Mail";
// import PhoneIcon from "../../../assets/icons/Phone";
import EyeIcon from "../../../assets/icons/Eye";
// import User from "../../../assets/icons/User";
import UserCircle from "../../../assets/icons/UserCircle";
import { useState } from "react";
import EyeSlashIcon from "../../../assets/icons/EyeSlash";
import { SubmitHandler, useForm } from "react-hook-form";
import { registerFormProps } from "../../../interfaces/registerForm.interface";
import { Link } from "@tanstack/react-router";
// import AutoCompletePhone from "../../Modules/AutoCompletePhone/AutoCompletePhone";
import { useRegisterApi } from "../../../hooks/api/useAuthApi";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerFormProps>();

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const { mutate, isPending } = useRegisterApi();

  const togglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const submitRegisterFormHandler: SubmitHandler<registerFormProps> = (
    data
  ) => {
    mutate(data);
  };

  return (
    <div className="w-full">
      <h1 className="text-3xl md:text-5xl font-bold dark:text-white text-center">
        Register
      </h1>
      <form
        onSubmit={handleSubmit(submitRegisterFormHandler)}
        className="flex flex-col gap-4 items-center mt-12 child:w-full"
      >
        {/* <Input
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
          label="Full Name"
          {...register("fullname", {
            required: "Please Enter Your Name",
          })}
          endContent={<User />}
          errorMessage={errors.fullname?.message}
          isInvalid={Boolean(errors.fullname)}
        /> */}
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
            required: "Please Enter Username",
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
          label="Email (optional)"
          {...register("email")}
          endContent={<MailIcon />}
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
            required: "Please Enter Your Password",
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
          type={`${isPasswordVisible ? "text" : "password"}`}
          label="Confirm Password"
          {...register("password2", {
            required: "Please Enter Your Password",
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
