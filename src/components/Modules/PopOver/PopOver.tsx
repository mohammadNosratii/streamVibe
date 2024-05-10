import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { PopOverProps } from "../../../interfaces/popOver.interface";

export default function PopOver({content, children}: PopOverProps) {
  return (
    <Popover backdrop="blur" showArrow placement="bottom">
      <PopoverTrigger>
        {children}
      </PopoverTrigger>
      <PopoverContent className="py-3 flex flex-col items-start">
        {content}
      </PopoverContent>
    </Popover>
  );
}
