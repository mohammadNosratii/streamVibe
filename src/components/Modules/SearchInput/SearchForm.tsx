import { Input } from "@nextui-org/react";
import SerachIcon from "../../../assets/icons/Serach";
import { SubmitHandler, useForm } from "react-hook-form";
import { searchInput } from "../../../interfaces/searchInput.interface";

export default function SearchForm() {
  const { register, handleSubmit } = useForm<searchInput>();
  const searchHandler: SubmitHandler<searchInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(searchHandler)}>
      <Input
        {...register("searchText", {
          required: true,
        })}
        radius="lg"
        classNames={{
          input: [
            "bg-transparent",
            "placeholder:text-xs",
            "lg:placeholder:text-sm",
            "xl:placeholder:text-base",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          inputWrapper: [
            "w-[100%]",
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focus=true]:bg-black-12",
            "dark:group-data-[focus=true]:bg-black-6",
            "!cursor-text",
          ],
        }}
        placeholder="Type to search..."
        startContent={
          <button>
            <SerachIcon />
          </button>
        }
      />
    </form>
  );
}
