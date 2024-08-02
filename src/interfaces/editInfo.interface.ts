import { DateValue } from "@nextui-org/react";

interface editInfoProps {
  // FIXME should update these fields to camelcase
  first_name: string | null;
  last_name: string | null;
  phone: number | null;
  email: string;
  username: string;
  birthDate: DateValue | null | undefined;
}

export type { editInfoProps };
