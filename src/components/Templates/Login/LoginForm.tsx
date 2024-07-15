import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Input } from "@nextui-org/react";
import MailIcon from "../../../assets/icons/Mail";
import PhoneIcon from "../../../assets/icons/Phone";
import EyeSlashIcon from "../../../assets/icons/EyeSlash";
import EyeIcon from "../../../assets/icons/Eye";
import { Link } from "@tanstack/react-router";
import { useLoginApi } from "../../../hooks/api/useAuthApi";
import { loginUserProps } from "../../../interfaces/loginUser.interface";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginUserProps>();

  const { mutate, isPending } = useLoginApi()

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const togglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const submitLoginFormHandler: SubmitHandler<loginUserProps> = (data) => {
    mutate(data)
  };

  return (
    <div className="w-full">
      <h1 className="text-3xl md:text-5xl font-bold dark:text-white text-center">
        Login
      </h1>
      <form
        onSubmit={handleSubmit(submitLoginFormHandler)}
        className="flex flex-col justify-center gap-4 mt-12"
      >
        <Input
          classNames={{
            mainWrapper: ["bg-transparent outline-noen rounded-2xl"],
            inputWrapper: ["bg-transparent border-1 dark:border-black-15 rounded-2xl"],
            input: ["bg-transparent"],
            innerWrapper: ["bg-transparent"],
          }}
          size="sm"
          label="Username"
          {...register("username", {
            required: "Username Could not be empty",
          })}
          endContent={
            <div className="flex items-center gap-1">
              <MailIcon />
              <span className="text-black-6 dark:text-mainLight">/</span>
              <PhoneIcon />
            </div>
          }
          errorMessage={errors.username?.message}
          isInvalid={Boolean(errors.username)}
        />
        <Input
          classNames={{
            mainWrapper: ["bg-transparent outline-none rounded-2xl"],
            inputWrapper: ["bg-transparent border-1 dark:border-black-15 rounded-2xl"],
            input: ["bg-transparent"],
            innerWrapper: ["bg-transparent"],
          }}
          size="sm"
          type={isPasswordVisible ? "text" : "password"}
          label="Password"
          {...register("password", {
            required: "Password could not be empty",
          })}
          endContent={
            <div onClick={togglePassword} className="cursor-pointer">
              {isPasswordVisible ? <EyeSlashIcon /> : <EyeIcon />}
            </div>
          }
          isInvalid={Boolean(errors.password)}
        />
        {/* // TODO Should Implement rememberMe */}
        {/* <div className="flex items-center justify-between">
          <Checkbox
            {...register("rememberMe")}
            classNames={{ label: ["text-gray-60 text-sm"] }}
          >
            Remember Me
          </Checkbox>
          <Link to="/forget-password" className="text-gray-60 text-sm">
            Forget Password?
          </Link>
        </div> */}
        <Button type="submit" className="dark:bg-mainLight text-black-6" isLoading={isPending}>Login</Button>
        <p className="text-gray-60 text-sm text-center">
          Don't have an account?{" "}
          <Link to="/register" className="underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
