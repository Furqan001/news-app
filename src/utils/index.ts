import format from "date-fns/format";

export function getFormattedDate(
  date: Date,
  dateFormat = "dd-MM-yyyy hh:mm a"
) {
  return format(new Date(date), dateFormat);
}
