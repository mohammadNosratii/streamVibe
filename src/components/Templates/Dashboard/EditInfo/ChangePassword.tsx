import { SubmitHandler, useForm } from "react-hook-form";
import { changePasswordProps } from "../../../../interfaces/changePassword.interface";
import { Button, Input } from "@nextui-org/react";
import EyeSlashIcon from "../../../../assets/icons/EyeSlash";
import EyeIcon from "../../../../assets/icons/Eye";
import { useState } from "react";
import { useChangePasswordApi } from "../../../../hooks/api/usePasswordApi";


export default function ChangePassword() {
    const { register, handleSubmit, formState: { errors }, getValues, reset } = useForm<changePasswordProps>()

    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const [isPassword2Visible, setIsPassword2Visible] = useState<boolean>(false);

    const togglePassword = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const togglePassword2 = () => {
        setIsPassword2Visible(!isPassword2Visible)
    }

    const { mutate, isPending } = useChangePasswordApi(reset)

    const submitFormHandler: SubmitHandler<changePasswordProps> = (data) => {
        mutate(data);
    }
    return (
        <form onSubmit={handleSubmit(submitFormHandler)} className='space-y-4'>
            <div className="grid grid-cols-2 gap-4">
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
                    label="Old Password"
                    {...register("old_password", {
                        required: "Old Password could not be empty",
                        minLength: { value: 8, message: "At Least Enter 8 Character" },
                    })}
                    errorMessage={errors.new_password1?.message}
                    isInvalid={Boolean(errors.new_password1)}
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
                    {...register("new_password1", {
                        required: "New Password could not be empty",
                        minLength: { value: 8, message: "At Least Enter 8 Character" },
                    })}
                    endContent={
                        <div className="cursor-pointer" onClick={togglePassword}>
                            {isPasswordVisible ? <EyeSlashIcon /> : <EyeIcon />}
                        </div>
                    }
                    errorMessage={errors.new_password1?.message}
                    isInvalid={Boolean(errors.new_password1)}
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
                    {...register("new_password2", {
                        required: "Confirm Password could not be empty",
                        minLength: { value: 8, message: "At Least Enter 8 Character" },
                        validate: value =>
                            value === getValues("new_password1") || "Passwords do not match"
                    })}
                    endContent={
                        <div className="cursor-pointer" onClick={togglePassword2}>
                            {isPassword2Visible ? <EyeSlashIcon /> : <EyeIcon />}
                        </div>
                    }
                    errorMessage={errors.new_password2?.message}
                    isInvalid={Boolean(errors.new_password2)}
                />
            </div>
            <div className='flex items-center gap-2'>
                <Button className='bg-red-45 dark:bg-red-45/80 text-white' type='submit' isLoading={isPending}>Change Password</Button>
                <Button onClick={() => reset()}>Discard</Button>
            </div>
        </form>
    )
}
