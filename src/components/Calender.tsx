import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { useMemo, useState } from "react";

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
        {calenderDays.map((day) => (
          <div key={day.getTime()} className="day non-month-day old-month-day">
            <div className="day-header">
              <div className="week-name">Sun</div>
              <div className="day-number">28</div>
              <button className="add-event-btn">+</button>
            </div>
            <div className="events">
              <button className="all-day-event blue event">
                <div className="event-name">Short</div>
              </button>
              <button className="all-day-event green event">
                <div className="event-name">
                  Long Event Name That Just Keeps Going
                </div>
              </button>
              <button className="event">
                <div className="color-dot blue"></div>
                <div className="event-time">7am</div>
                <div className="event-name">Event Name</div>
              </button>
            </div>
          </div>
        ))}
       
      </div>
    </div>
  );
};

export default Calender;

function CalenderDay() {}
