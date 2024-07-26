import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Button, DatePicker, Input } from "@nextui-org/react";
import { editInfoProps } from "../../../../interfaces/editInfo.interface";
import AutoCompletePhone from "../../../Modules/AutoCompletePhone/AutoCompletePhone";

export default function PersonalInfo() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<editInfoProps>();

  const submitFormHandler: SubmitHandler<editInfoProps> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(submitFormHandler)}
      className="grid 3xs:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4"
    >
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
        {...register("first_name", {
          required: "First name could not be empty",
        })}
        errorMessage={errors.first_name?.message}
        isInvalid={Boolean(errors.first_name)}
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
        {...register("last_name", {
          required: "Last name could not be empty",
        })}
        errorMessage={errors.last_name?.message}
        isInvalid={Boolean(errors.last_name)}
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
        variant="bordered"
        {...register("email", {
          required: "Email could not be empty",
          pattern: {
            value:
              /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g,
            message: "Email is not valid",
          },
        })}
        errorMessage={errors.email?.message}
        isInvalid={Boolean(errors.email)}
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
        label="Username"
        variant="bordered"
        {...register("username", {
          required: "Username could not be empty",
        })}
        errorMessage={errors.username?.message}
        isInvalid={Boolean(errors.username)}
      />
      <Input
        startContent={<AutoCompletePhone />}
        classNames={{
          mainWrapper: ["bg-transparent outline-none rounded-2xl "],
          inputWrapper: [
            "bg-transparent border-2 dark:border-[#3f3f46] h-full ps-0 pe-3",
          ],
          input: ["bg-transparent"],
          innerWrapper: ["bg-transparent"],
        }}
        type="number"
        placeholder="Phone Number"
        {...register("phone", {
          required: "Please Enter Your Phone Number",
        })}
        errorMessage={errors.phone?.message}
        isInvalid={Boolean(errors.phone)}
      />
      <Controller
        control={control}
        name="birthDate"
        render={({ field: { onChange, value } }) => (
          <DatePicker
            label="Birth Date"
            variant="bordered"
            value={value}
            onChange={onChange}
            classNames={{
              base: ["h-12"],
            }}
            showMonthAndYearPickers
          />
        )}
      />
      <div className="flex items-center gap-2">
        <Button
          className="bg-red-45 dark:bg-red-45/80 text-white"
          type="submit"
        >
          Update Info
        </Button>
        <Button onClick={() => reset()}>Discard</Button>
      </div>
    </form>
  );
}
