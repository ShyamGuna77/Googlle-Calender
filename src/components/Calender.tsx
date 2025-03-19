import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { useMemo, useState } from "react";
import CalenderDay from "./CalenderDay";

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
        <button className="btn">Today</button>
        <div>
          <button className="month-change-btn">&lt;</button>
          <button className="month-change-btn">&gt;</button>
        </div>
        <span className="month-title">June 2023</span>
      </div>
      <div className="days">
        {calenderDays.map((day,index) => (
         <CalenderDay key={day.getTime()}  day = {day} showWeekName={index <7} selectedMonth={selectedMoth}/>
        ))}
       
      </div>
    </div>
  );
};

export default Calender;
