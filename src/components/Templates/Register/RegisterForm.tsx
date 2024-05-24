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
import AutoCompletePhone from "../../Modules/AutoCompletePhone/AutoCompletePhone";

export default function Register({
  showOtpHandler,
}: {
  showOtpHandler: () => void;
}) {
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
    showOtpHandler();
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
        <Input
          classNames={{
            mainWrapper: ["bg-transparent outline-none rounded-2xl"],
            inputWrapper: [
              "bg-transparent border-1 dark:border-black-15 rounded-2xl",
            ],
            input: ["bg-transparent"],
            innerWrapper: ["bg-transparent"],
          }}
          type="text"
          label="Full Name"
          placeholder="Enter Your Name"
          {...register("fullname", {
            required: "Please Enter Your Name",
          })}
          endContent={<User />}
          errorMessage={errors.fullname?.message}
          isInvalid={Boolean(errors.fullname)}
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
          type="text"
          label="Username"
          placeholder="Enter Your Username"
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
          type={`${isPasswordVisible ? "text" : "password"}`}
          label="Password"
          placeholder="Enter Your Password"
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
          startContent={<AutoCompletePhone />}
          classNames={{
            mainWrapper: ["bg-transparent outline-none rounded-2xl h-11"],
            inputWrapper: [
              "bg-transparent border-1 dark:border-black-15 rounded-2xl h-full ps-0 pe-3",
            ],
            input: ["bg-transparent"],
            innerWrapper: ["bg-transparent"],
          }}
          type="number"
          placeholder="Phone Number"
          {...register("phone", {
            required: "Please Enter Your Phone Number",
          })}
          endContent={<PhoneIcon />}
          errorMessage={errors.phone?.message}
          isInvalid={Boolean(errors.phone)}
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
          type="email"
          label="Email"
          placeholder="Enter Your Email (Optional)"
          {...register("email")}
          endContent={<MailIcon />}
        />
        <Button type="submit" className="dark:bg-mainLight text-black-6">
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
