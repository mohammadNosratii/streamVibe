import { Autocomplete, AutocompleteItem, Avatar } from "@nextui-org/react";
import { autoComplete } from "../../../constants/AutoComplete";

export default function AutoCompletePhone({
  onChange,
  value,
}: {
  onChange: () => void;
  value?: string;
}) {
  return (
    <Autocomplete
      variant="flat"
      defaultSelectedKey={value}
      selectedKey={value}
      radius="sm"
      aria-label="phoneFlags"
      onSelectionChange={onChange}
      classNames={{
        popoverContent: ["w-52"],
        base: ["w-[135px] md:w-[125px]"],
        clearButton: ["hidden"],
      }}
    >
      {autoComplete.map((item) => (
        <AutocompleteItem
          startContent={<Avatar className="w-6 h-6" src={item.flag} />}
          key={item.code}
        >
          {item.code}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  );
}
