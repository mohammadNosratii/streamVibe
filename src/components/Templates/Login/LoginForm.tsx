import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginFormProps } from "../../../interfaces/loginForm.interface";
import { Button, Checkbox, Input } from "@nextui-org/react";
import { combinedEmailAndPhoneRegex } from "../../../utils/combineEmailAndPhoneRegex";
import MailIcon from "../../../assets/icons/Mail";
import PhoneIcon from "../../../assets/icons/Phone";
import EyeSlashIcon from "../../../assets/icons/EyeSlash";
import EyeIcon from "../../../assets/icons/Eye";
import { Link } from "@tanstack/react-router";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormProps>();

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const togglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const submitLoginFormHandler: SubmitHandler<loginFormProps> = (data) => {
    console.log(data);
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
          label="Email / Phone"
          placeholder="Enter Your Email or Phone"
          {...register("emailOrPhone", {
            required: true,
            pattern: {
              value: combinedEmailAndPhoneRegex(),
              message: "Your Email / Phone must be valid",
            },
          })}
          endContent={
            <div className="flex items-center gap-1">
              <MailIcon />
              <span className="text-black-6 dark:text-mainLight">/</span>
              <PhoneIcon />
            </div>
          }
          errorMessage={errors.emailOrPhone?.message}
          isInvalid={Boolean(errors.emailOrPhone)}
        />
        <Input
          classNames={{
            mainWrapper: ["bg-transparent outline-none rounded-2xl"],
            inputWrapper: ["bg-transparent border-1 dark:border-black-15 rounded-2xl"],
            input: ["bg-transparent"],
            innerWrapper: ["bg-transparent"],
          }}
          type={isPasswordVisible ? "text" : "password"}
          label="Password"
          placeholder="Enter Your Password"
          {...register("password", {
            required: true,
          })}
          endContent={
            <div onClick={togglePassword} className="cursor-pointer">
              {isPasswordVisible ? <EyeSlashIcon /> : <EyeIcon />}
            </div>
          }
          isInvalid={Boolean(errors.password)}
        />
        <div className="flex items-center justify-between">
          <Checkbox
            {...register("rememberMe")}
            classNames={{ label: ["text-gray-60 text-sm"] }}
          >
            Remember Me
          </Checkbox>
          <Link to="/forget-password" className="text-gray-60 text-sm">
            Forget Password?
          </Link>
        </div>
        <Button type="submit">Login</Button>
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
