import { SubmitHandler, useForm } from "react-hook-form"
import { forgetPasswordByEmailProps } from "../../../interfaces/forgetPassword.interface"
import { Button, Input } from "@nextui-org/react";
import MailIcon from "../../../assets/icons/Mail";
import { useResetPasswordApi } from "../../../hooks/api/useAuthApi";

export default function ForgetPasswordByEmilForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<forgetPasswordByEmailProps>()
    const { mutate, isPending } = useResetPasswordApi()

    const submitFormHandler: SubmitHandler<forgetPasswordByEmailProps> = (data) => {
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
                label="Email"
                {...register("email", {
                    pattern: {
                        value: /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g,
                        message: "Email is not valid"
                    },
                    required: "Email could not be empty",
                })}
                type="email"
                endContent={<MailIcon />}
                errorMessage={errors.email?.message}
                isInvalid={Boolean(errors.email)}
            />
            <Button type="submit" className="dark:bg-mainLight text-black-6" isLoading={isPending}>Reset Password</Button>
        </form>
    )
}
