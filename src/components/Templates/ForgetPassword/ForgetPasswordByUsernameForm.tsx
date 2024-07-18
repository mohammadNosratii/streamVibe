import { SubmitHandler, useForm } from "react-hook-form"
import { forgetPasswordByUsernameProps } from "../../../interfaces/forgetPassword.interface"
import { Button, Input } from "@nextui-org/react";
import UserCircle from "../../../assets/icons/UserCircle";
import { useResetPasswordApi } from "../../../hooks/api/useAuthApi";

export default function ForgetPasswordByUsernameForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<forgetPasswordByUsernameProps>()
    const { mutate, isPending } = useResetPasswordApi()

    const submitFormHandler: SubmitHandler<forgetPasswordByUsernameProps> = (data) => {
        mutate(data)
    }
    return (
        <form onSubmit={handleSubmit(submitFormHandler)}
            className="flex flex-col justify-center gap-4">
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
                    required: "Username could not be empty",
                })}
                endContent={<UserCircle />}
                errorMessage={errors.username?.message}
                isInvalid={Boolean(errors.username)}
            />
            <Button type="submit" className="dark:bg-mainLight text-black-6" isLoading={isPending}>Reset Password</Button>
        </form>
    )
}
