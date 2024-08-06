import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { contactUsProps } from "../../../interfaces/contactUs.interface";
import { Button, Checkbox, Input, Textarea } from "@nextui-org/react";
import { emailRegex } from "../../../utils/combineEmailAndPhoneRegex";
import AutoCompletePhone from "../../Modules/AutoCompletePhone/AutoCompletePhone";
import { useMemo, useState } from "react";

export default function ContactUsForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<contactUsProps>();
  const [isAccetpedRules, setIsAcceptedRules] = useState<boolean>(false);

  const submitFormHandler: SubmitHandler<contactUsProps> = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(submitFormHandler)} className="space-y-8">
      {useMemo(
        () => (
          <div className="grid sm:grid-cols-2 gap-8">
            <Input
              classNames={{
                mainWrapper: ["bg-transparent outline-noen rounded-2xl"],
                inputWrapper: [
                  "bg-transparent border-2 dark:border-[#3f3f46] rounded-2xl",
                ],
                input: ["bg-transparent"],
                innerWrapper: ["bg-transparent"],
              }}
              size="sm"
              label="First name"
              variant="bordered"
              {...register("firstName", {
                required: "First name could not be empty",
              })}
              errorMessage={errors.firstName?.message}
              isInvalid={Boolean(errors.firstName)}
            />
            <Input
              classNames={{
                mainWrapper: ["bg-transparent outline-noen rounded-2xl"],
                inputWrapper: [
                  "bg-transparent border-2 dark:border-[#3f3f46] rounded-2xl",
                ],
                input: ["bg-transparent"],
                innerWrapper: ["bg-transparent"],
              }}
              size="sm"
              label="Last name"
              variant="bordered"
              {...register("lastName", {
                required: "Last name could not be empty",
              })}
              errorMessage={errors.lastName?.message}
              isInvalid={Boolean(errors.lastName)}
            />
            <Input
              classNames={{
                mainWrapper: ["bg-transparent outline-noen rounded-2xl"],
                inputWrapper: [
                  "bg-transparent border-2 dark:border-[#3f3f46] rounded-2xl",
                ],
                input: ["bg-transparent"],
                innerWrapper: ["bg-transparent"],
              }}
              size="sm"
              label="Email"
              type="email"
              variant="bordered"
              {...register("email", {
                required: "Email could not be empty",
                pattern: {
                  value: emailRegex,
                  message: "Email is not valid",
                },
              })}
              errorMessage={errors.email?.message}
              isInvalid={Boolean(errors.email)}
            />
            <Input
              startContent={
                <Controller
                  name="countryCode"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <AutoCompletePhone onChange={onChange} value={value} />
                  )}
                />
              }
              classNames={{
                mainWrapper: ["bg-transparent outline-none rounded-2xl"],
                inputWrapper: [
                  "bg-transparent border-2 dark:border-[#3f3f46] rounded-2xl h-full ps-0 pe-3",
                ],
                input: ["bg-transparent"],
                innerWrapper: ["bg-transparent"],
              }}
              type="number"
              placeholder="Phone Number"
              {...register("phoneNumber")}
            />
            <Textarea
              classNames={{
                base: ["col-span-1 sm:col-span-2"],
                mainWrapper: ["bg-transparent outline-noen rounded-2xl"],
                inputWrapper: [
                  "bg-transparent border-2 dark:border-[#3f3f46] rounded-2xl",
                ],
                input: ["bg-transparent"],
                innerWrapper: ["bg-transparent"],
              }}
              size="sm"
              label="Message"
              variant="bordered"
              {...register("message", {
                required: "Message could not be empty",
              })}
              errorMessage={errors.message?.message}
              isInvalid={Boolean(errors.message)}
            />
          </div>
        ),
        [
          errors.email,
          errors.firstName,
          errors.lastName,
          errors.message,
          register,
        ]
      )}
      <div className="flex flex-col sm:flex-row gap-2 justify-between items-center">
        <Checkbox
          isSelected={isAccetpedRules}
          onValueChange={(newValue) => setIsAcceptedRules(newValue)}
          classNames={{
            label: ["text-sm text-gray-60"],
          }}
        >
          I agree with Terms of Use and Privacy Policy
        </Checkbox>
        <Button
          className="text-white bg-red-45 dark:bg-red-45/80"
          type="submit"
          isDisabled={!isAccetpedRules}
        >
          Send Message
        </Button>
      </div>
    </form>
  );
}
