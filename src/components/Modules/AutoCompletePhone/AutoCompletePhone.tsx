import { Autocomplete, AutocompleteItem, Avatar } from "@nextui-org/react";
import { autoComplete } from "../../../constants/AutoComplete";

export default function AutoCompletePhone() {
  return (
    <Autocomplete
      variant="flat"
      defaultSelectedKey={"Iran"}
      radius="lg"
      classNames={{
        popoverContent: ["w-52"],
        base: ["w-32"],
        clearButton: ["hidden"],
      }}
    >
      {autoComplete.map((item) => (
        <AutocompleteItem
          startContent={<Avatar className="w-6 h-6" src={item.flag} />}
          key={item.value}
        >
          {item.label}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  );
}
