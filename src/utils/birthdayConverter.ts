export default function formatBirthDate(birthDate: any) {
  const { day, month, year } = birthDate;
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(
    2,
    "0"
  )}`;
}
