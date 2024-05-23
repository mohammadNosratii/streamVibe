import { Button, Input } from "@nextui-org/react";
import MailIcon from "../../../assets/icons/Mail";
import PhoneIcon from "../../../assets/icons/Phone";
import EyeIcon from "../../../assets/icons/Eye";
import User from "../../../assets/icons/User";
import UserCircle from "../../../assets/icons/UserCircle";
import { useState } from "react";
import EyeSlashIcon from "../../../assets/icons/EyeSlash";
import { SubmitHandler, useForm } from "react-hook-form";
import { registerFormProps } from "../../../interfaces/registerForm.interface";
import { Link } from "@tanstack/react-router";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerFormProps>();

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const togglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const submitRegisterFormHandler: SubmitHandler<registerFormProps> = (
    data
  ) => {
    console.log(data);
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
        <div>
          <Input
            classNames={{
              mainWrapper: ["bg-transparent border-1 rounded-2xl"],
              inputWrapper: ["bg-transparent border-1 rounded-2xl"],
              input: ["bg-transparent cursor-pointer"],
              innerWrapper: ["bg-transparent"],
            }}
            type="text"
            placeholder="Full Name"
            {...register("fullname", {
              required: "Please Enter Your Name",
            })}
            endContent={
              <div className="cursor-pointer">
                <User />
              </div>
            }
            isInvalid={Boolean(errors.fullname)}
          />
          <span className="formErrorsMessage">{errors.fullname?.message}</span>
        </div>
        <div>
          <Input
            classNames={{
              mainWrapper: ["bg-transparent border-1 rounded-2xl"],
              inputWrapper: ["bg-transparent border-1 rounded-2xl"],
              input: ["bg-transparent cursor-pointer"],
              innerWrapper: ["bg-transparent"],
            }}
            type="text"
            placeholder="Username"
            {...register("username", {
              required: "Please Enter Username",
              minLength: { value: 8, message: "At Least Enter 8 Character" },
            })}
            endContent={
              <div className="cursor-pointer">
                <UserCircle />
              </div>
            }
            isInvalid={Boolean(errors.username)}
          />
          <span className="formErrorsMessage">{errors.username?.message}</span>
        </div>
        <div>
          <Input
            classNames={{
              mainWrapper: ["bg-transparent border-1 rounded-2xl"],
              inputWrapper: ["bg-transparent border-1 rounded-2xl"],
              input: ["bg-transparent cursor-pointer"],
              innerWrapper: ["bg-transparent"],
            }}
            type={`${isPasswordVisible ? "text" : "password"}`}
            placeholder="Password"
            {...register("password", {
              required: "Please Enter Your Password",
              minLength: { value: 8, message: "At Least Enter 8 Character" },
            })}
            endContent={
              <div className="cursor-pointer" onClick={togglePassword}>
                {isPasswordVisible ? <EyeSlashIcon /> : <EyeIcon />}
              </div>
            }
            isInvalid={Boolean(errors.password)}
          />
          <span className="formErrorsMessage">{errors.password?.message}</span>
        </div>
        <div>
          <Input
            classNames={{
              mainWrapper: ["bg-transparent border-1 rounded-2xl"],
              inputWrapper: ["bg-transparent border-1 rounded-2xl"],
              input: ["bg-transparent cursor-pointer"],
              innerWrapper: ["bg-transparent"],
            }}
            type="number"
            placeholder="Phone"
            {...register("phone", {
              required: "Please Enter Your Phone Number",
            })}
            endContent={
              <div className="flex items-center gap-1">
                <PhoneIcon />
              </div>
            }
            isInvalid={Boolean(errors.phone)}
          />
          <span className="formErrorsMessage">{errors.phone?.message}</span>
        </div>
        <Input
          classNames={{
            mainWrapper: ["bg-transparent border-1 rounded-2xl"],
            inputWrapper: ["bg-transparent border-1 rounded-2xl"],
            input: ["bg-transparent cursor-pointer"],
            innerWrapper: ["bg-transparent"],
          }}
          type="email"
          placeholder="Email (Optional)"
          {...register("email")}
          endContent={
            <div className="flex items-center gap-1">
              <MailIcon />
            </div>
          }
        />
        <Button className="w-full" type="submit">
          Register
        </Button>
        <p className="text-[#717179] text-sm text-center">
          Already have an acount ?{" "}
          <Link to="/login" className="underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
