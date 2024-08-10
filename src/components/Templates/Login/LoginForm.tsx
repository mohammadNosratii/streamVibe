import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Checkbox, Input } from "@nextui-org/react";
import EyeSlashIcon from "../../../assets/icons/EyeSlash";
import EyeIcon from "../../../assets/icons/Eye";
import { Link } from "@tanstack/react-router";
import { useLoginApi } from "../../../hooks/api/useAuthApi";
import { loginUserProps } from "../../../interfaces/loginUser.interface";
import UserCircle from "../../../assets/icons/UserCircle";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginUserProps>({
    defaultValues: {
      rememberMe: true
    }
  });

  const { mutate, isPending } = useLoginApi()

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const togglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const submitLoginFormHandler: SubmitHandler<loginUserProps> = (data) => {
    mutate(data)
  };
  return (
    <form
      onSubmit={handleSubmit(submitLoginFormHandler)}
      className="flex flex-col justify-center gap-4 mt-8 w-full"
    >
      {/* TODO should add phonenumber to identifier */}
      <Input
        classNames={{
          mainWrapper: ["bg-transparent outline-noen rounded-2xl"],
          inputWrapper: ["bg-transparent border-1 dark:border-black-15 rounded-2xl"],
          input: ["bg-transparent"],
          innerWrapper: ["bg-transparent"],
        }}
        size="sm"
        label="Username / Email"
        {...register("identifier", {
          required: "Username / Email could not be empty",
          pattern: {
            value: /^(?=.{3,320})([^@\s]+@[^@\s]+\.[^@\s]+|[a-zA-Z0-9._-]+)$/g,
            message: "Username / Email is not valid"
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
        errorMessage={errors.identifier?.message}
        isInvalid={Boolean(errors.identifier)}
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
          <div onClick={togglePassword} className="cursor-pointer">
            {isPasswordVisible ? <EyeSlashIcon /> : <EyeIcon />}
          </div>
        }
        errorMessage={errors.password?.message}
        isInvalid={Boolean(errors.password)}
      />
      <div className="flex items-center justify-between">
        <Checkbox
          {...register("rememberMe")}
          classNames={{ label: ["text-gray-60 text-sm"] }}
        >
          Remember Me
        </Checkbox>
        <Link to="/forget-password/" className="text-gray-60 text-sm hover:underline">
          Forget Password?
        </Link>
      </div>
      <Button type="submit" className="dark:bg-mainLight text-black-6" isLoading={isPending}>Login</Button>
      <p className="text-gray-60 text-sm text-center">
        Don't have an account?{" "}
        <Link to="/register/" className="underline">
          Register
        </Link>
      </p>
    </form>
  );
}
