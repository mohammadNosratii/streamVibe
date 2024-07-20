import { DateValue } from "@nextui-org/react";

interface editInfoProps {
  // FIXME should update these fields to camelcase
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  username: string;
  birthDate: DateValue | null | undefined;
}

export type { editInfoProps };
