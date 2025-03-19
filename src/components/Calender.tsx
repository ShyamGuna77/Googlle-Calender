import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import { useMemo, useState } from "react";
import CalenderDay from "./CalenderDay";
import { formatDate } from "../utils/formatDate";

const Calender = () => {
  const [selectedMoth, setSelectedMonth] = useState(new Date());

  const calenderDays = useMemo(() => {
    const firstWeekStart = startOfWeek(startOfMonth(selectedMoth));
    const lastWeekEnd = endOfWeek(endOfMonth(selectedMoth));
    return eachDayOfInterval({ start: firstWeekStart, end: lastWeekEnd });
  }, [selectedMoth]);

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={() => setSelectedMonth(new Date())} className="btn">
          Today
        </button>
        <div>
          <button
            onClick={() => setSelectedMonth((m) => subMonths(m, 1))}
            className="month-change-btn"
          >
            &lt;
          </button>
          <button
            onClick={() => setSelectedMonth((m) => addMonths(m, 1))}
            className="month-change-btn"
          >
            &gt;
          </button>
        </div>
        <span className="month-title">{formatDate(selectedMoth,{month:"long",year:"numeric"})}</span>
      </div>
      <div className="days">
        {calenderDays.map((day, index) => (
          <CalenderDay
            key={day.getTime()}
            day={day}
            showWeekName={index < 7}
            selectedMonth={selectedMoth}
          />
        ))}
      </div>
    </div>
  );
};

export default Calender;
