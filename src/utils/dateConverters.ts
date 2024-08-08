import { DateValue } from "@internationalized/date";

export const formattedDate = (date: number) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const convertDatePickerValueToTimestamps = (date: DateValue) => {
  const { year, month, day } = date;

  const formattedDate = new Date(year, month - 1, day);
  const timestamps = Math.floor(formattedDate.getTime());

  return timestamps;
};
