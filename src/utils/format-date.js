import { useEffect, useState } from "react";
import moment from "moment";

export function useFormatDate(date) {
  const [day, setDay] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(moment(date).format("hh:mm"));
    setDay(moment(date).format("d"));
    setMonth(moment(date).format("MMMM"));
    setYear(moment(date).format("YYYY"));

    return () => {};
  }, []);

  return { day, month, year, time };
}
