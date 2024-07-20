import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import AvatarInfo from './AvatarInfo';
import { DatePicker, Input } from '@nextui-org/react';
import { editInfoProps } from '../../../../interfaces/editInfo.interface';
import AutoCompletePhone from '../../../Modules/AutoCompletePhone/AutoCompletePhone';

export default function EditInfoForm() {
    const { register, control, handleSubmit, formState: { errors } } = useForm<editInfoProps>()

    const submitFormHandler: SubmitHandler<editInfoProps> = (data) => {
        console.log(data);
    }
    return (
        <div className='space-y-10'>
            <AvatarInfo />
            <form onSubmit={handleSubmit(submitFormHandler)} className='grid grid-cols-2 gap-4'>
                <Input
                    classNames={{
                        mainWrapper: ["bg-transparent outline-noen rounded-2xl"],
                        inputWrapper: ["bg-transparent border-1 border-gray-60 rounded-2xl"],
                        input: ["bg-transparent"],
                        innerWrapper: ["bg-transparent"],
                    }}
                    size="sm"
                    label="First name"
                    variant='bordered'
                    {...register("first_name", {
                        required: "First name could not be empty",
                    })}
                    errorMessage={errors.first_name?.message}
                    isInvalid={Boolean(errors.first_name)}
                />
                <Input
                    classNames={{
                        mainWrapper: ["bg-transparent outline-noen rounded-2xl"],
                        inputWrapper: ["bg-transparent border-1 border-gray-60 rounded-2xl"],
                        input: ["bg-transparent"],
                        innerWrapper: ["bg-transparent"],
                    }}
                    size="sm"
                    label="Last name"
                    variant='bordered'
                    {...register("last_name", {
                        required: "Last name could not be empty",
                    })}
                    errorMessage={errors.last_name?.message}
                    isInvalid={Boolean(errors.last_name)}
                />
                <Input
                    classNames={{
                        mainWrapper: ["bg-transparent outline-noen rounded-2xl"],
                        inputWrapper: ["bg-transparent border-1 border-gray-60 rounded-2xl"],
                        input: ["bg-transparent"],
                        innerWrapper: ["bg-transparent"],
                    }}
                    size="sm"
                    label="Email"
                    variant='bordered'
                    {...register("email", {
                        required: "Email could not be empty",
                        pattern: {
                            value: /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g,
                            message: "Email is not valid"
                        }
                    })}
                    errorMessage={errors.email?.message}
                    isInvalid={Boolean(errors.email)}
                />
                <Input
                    classNames={{
                        mainWrapper: ["bg-transparent outline-noen rounded-2xl"],
                        inputWrapper: ["bg-transparent border-1 border-gray-60 rounded-2xl"],
                        input: ["bg-transparent"],
                        innerWrapper: ["bg-transparent"],
                    }}
                    size="sm"
                    label="Username"
                    variant='bordered'
                    {...register("username", {
                        required: "Username could not be empty",
                    })}
                    errorMessage={errors.username?.message}
                    isInvalid={Boolean(errors.username)}
                />
                <Input
                    startContent={<AutoCompletePhone />}
                    classNames={{
                        mainWrapper: ["bg-transparent outline-none rounded-2xl h-11"],
                        inputWrapper: [
                            "bg-transparent border-1 border-gray-60 h-full ps-0 pe-3",
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
                <Controller control={control} name='birthDate' render={({ field: { onChange, value } }) => (
                    <DatePicker
                        label="Birth Date"
                        variant="bordered"
                        value={value}
                        onChange={onChange}
                        classNames={{
                            base: ["h-11"],
                        }}
                        showMonthAndYearPickers
                    />
                )} />
            </form>
        </div>
    );
}
