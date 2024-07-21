import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { addCommentProps } from "../../../interfaces/addComment.interface"
import { Button, Textarea } from "@nextui-org/react";
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
                    required: "Review could not be empty",
                })}
                errorMessage={errors.message?.message}
                isInvalid={Boolean(errors.message)}
            />
            <div className="flex items-center gap-2">
                <Button className="bg-red-45 text-white" type="submit">
                    Submit
                </Button>
                <Button onClick={discardReview}>
                    Discard
                </Button>
            </div>
        </form>
    )
}
