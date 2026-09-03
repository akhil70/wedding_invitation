export default function Calendar({ backgroundImage }) {
  const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  const calendarDays = [];

  // Get actual first day of November 2026
  // JavaScript getDay(): 0=Sunday, 1=Monday, ..., 6=Saturday
  // Our calendar: 0=Monday, 1=Tuesday, ..., 6=Sunday
  const nov1 = new Date(2026, 10, 1);
  let firstDayOfWeek = nov1.getDay() - 1; // Convert to 0=Monday
  if (firstDayOfWeek < 0) firstDayOfWeek = 6; // Sunday becomes 6

  const daysInMonth = 30; // November has 30 days
  const daysInPrevMonth = 31; // October has 31 days

  // Add days from previous month
  const prevMonthDays = firstDayOfWeek;
  for (let i = daysInPrevMonth - prevMonthDays + 1; i <= daysInPrevMonth; i++) {
    calendarDays.push({ day: i, isCurrentMonth: false });
  }

  // Add days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push({ day: i, isCurrentMonth: true });
  }

  // Add days from next month to fill the grid
  const remainingCells = 42 - calendarDays.length; // 6 rows * 7 days
  for (let i = 1; i <= remainingCells; i++) {
    calendarDays.push({ day: i, isCurrentMonth: false });
  }

  return (
    <div className="calendar-section" style={{ backgroundImage }}>
      <div className="calendar-container">
        <h2 className="calendar-title">November 2026</h2>

        <div className="calendar-box">
          {/* Days of week header */}
          <div className="calendar-header">
            {days.map((day) => (
              <div key={day} className="day-header">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="calendar-grid">
            {calendarDays.map((dayObj, index) => (
              <div
                key={index}
                className={`calendar-day ${dayObj.isCurrentMonth ? 'current-month' : 'other-month'} ${dayObj.isCurrentMonth && dayObj.day === 14 ? 'wedding-day' : ''}`}
              >
                {dayObj.day}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
