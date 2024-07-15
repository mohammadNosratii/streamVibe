import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { addCommentProps } from "../../../interfaces/addComment.interface"
import { Button, Input, Textarea } from "@nextui-org/react";
import StarRating from "../StarRating/StarRating";

export default function AddReviewForm({ discardReview, isReply }: { discardReview: () => void, isReply: boolean }) {
    const { register, control, handleSubmit, formState: { errors } } = useForm<addCommentProps>()

    const addCommentHandler: SubmitHandler<addCommentProps> = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(addCommentHandler)} className="space-y-4 h-full">
            {!isReply && <Controller name="score" control={control} render={({ field: { onChange, value } }) => (
                <StarRating rate={value} onChange={(newValue) => onChange(newValue)} isEditable={true} />
            )} />}
            <Input
                classNames={{
                    mainWrapper: ["outline-none rounded-xl"],
                    inputWrapper: [
                        "border-1 dark:border-black-15 rounded-xl",
                    ],
                }}
                size="sm"
                type="text"
                label="Name"
                {...register("name", {
                    required: "Please Enter Your Name",
                })}
                errorMessage={errors.name?.message}
                isInvalid={Boolean(errors.name)}
            />
            <Textarea
                classNames={{
                    mainWrapper: ["outline-none rounded-xl"],
                    inputWrapper: [
                        "border-1 dark:border-black-15 rounded-xl",
                    ],
                }}
                size="sm"
                label="Review"
                {...register("message", {
                    required: "Please Enter Your Review",
                })}
                errorMessage={errors.message?.message}
                isInvalid={Boolean(errors.message)}
            />
            <div className="flex items-center gap-2">
                <Button className="bg-red-45 text-white">
                    Submit
                </Button>
                <Button className="dark:bg-black-8" onClick={discardReview}>
                    Discard
                </Button>
            </div>
        </form>
    )
}
