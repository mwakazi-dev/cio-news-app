import dayjs from "dayjs";

export const convertDateToReadable = (dateString: string): string => {
  return dayjs(dateString).format("MMMM DD, YYYY");
};
