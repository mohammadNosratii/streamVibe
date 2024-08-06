import { DateValue } from "@internationalized/date";
interface editInfoProps {
  first_name: string | null;
  last_name: string | null;
  phone: number | string | null;
  email: string;
  username: string;
  date_of_birth: DateValue;
  countryCode?: string;
}

export type { editInfoProps };
