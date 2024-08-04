import { DateValue } from "@nextui-org/react";

interface editInfoProps {
  first_name: string | null;
  last_name: string | null;
  phone: number | null;
  email: string;
  username: string;
  birthDate: DateValue | null | undefined;
}

export type { editInfoProps };
