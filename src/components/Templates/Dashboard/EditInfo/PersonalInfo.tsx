import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Button, DatePicker, Input } from "@nextui-org/react";
import { editInfoProps } from "../../../../interfaces/editInfo.interface";
import AutoCompletePhone from "../../../Modules/AutoCompletePhone/AutoCompletePhone";
import {
  useGetUserInfoApi,
  usePutUserInfoApi,
} from "../../../../hooks/api/useUserApi";
import { useEffect } from "react";
import { emailRegex } from "../../../../utils/combineEmailAndPhoneRegex";
import { convertDatePickerValueToTimestamps } from "../../../../utils/dateConverters";

export default function PersonalInfo() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
    resetField
  } = useForm<editInfoProps>();

  const { data } = useGetUserInfoApi();

  const { mutate, isPending: updateUserLoading } = usePutUserInfoApi(resetField);

  useEffect(() => {
    if (data) {
      reset({
        first_name: data?.first_name,
        last_name: data?.last_name,
        email: data?.email,
        username: data?.username,
        phone: data?.phone,
        countryCode: data?.countryCode || "+98",
      });
    }
  }, [data, reset]);

  const submitFormHandler: SubmitHandler<editInfoProps> = (data) => {
    if (data.phone && data.countryCode) {
      data.phone = data.countryCode + data.phone;
    }
    if (data.date_of_birth) {
      //@ts-expect-error we wanna to convert birthdate to timstamps
      data.date_of_birth = convertDatePickerValueToTimestamps(data.date_of_birth)
    }

    delete data.countryCode

    mutate(data);
  };

  return (
    //FIXME checking hover problem
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
            value: emailRegex,
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
          mainWrapper: ["bg-transparent outline-none rounded-2xl "],
          inputWrapper: [
            "bg-transparent border-2 dark:border-[#3f3f46] h-full ps-0 pe-3",
          ],
          input: ["bg-transparent"],
          innerWrapper: ["bg-transparent"],
        }}
        type="number"
        placeholder="Phone Number"
        {...register("phone")}
        errorMessage={errors.phone?.message}
        isInvalid={Boolean(errors.phone)}
      />
      <Controller
        control={control}
        name="date_of_birth"
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
          isLoading={updateUserLoading}
        >
          Update Info
        </Button>
        <Button onClick={() => reset()}>Discard</Button>
      </div>
    </form>
  );
}
