import { useRecurrence } from "./recurrenceContext";
import { addDays, addWeeks, addMonths, addYears, format, isBefore, parseISO } from "date-fns";

const MiniCalendarPreview = () => {
  const { recurrence, customOptions, dateRange } = useRecurrence();
  const start = dateRange.start ? parseISO(dateRange.start) : null;
  const end = dateRange.end ? parseISO(dateRange.end) : null;

  if (!start) return null;

  const dates = [];
  let current = start;
  let count = 0;

  while ((!end || isBefore(current, end)) && count < 30) {
    if(recurrence === "weekly"){
      for(let i = 0; i < 7; i++){
        const dayToCheck = addDays(current, i);
        const dayIndex = dayToCheck.getDay();

        if(
          (!end || isBefore(dayToCheck, end)) && 
          customOptions.days?.includes(dayIndex)
        ){
          dates.push(format(dayToCheck, "yyyy-MM-dd"));
          if (dates.length >= 30) break;
        }
      }
      current = addWeeks(current,customOptions.interval || 1);
    }
    else{
      dates.push(format(current, "yyyy-MM-dd"));

    switch (recurrence) {
      case "daily":
        current = addDays(current, customOptions.interval || 1);
        break;
      case "weekly":
        current = addWeeks(current, customOptions.interval || 1);
        break;
      case "monthly":
        current = addMonths(current, customOptions.interval || 1);
        break;
      case "yearly":
        current = addYears(current, customOptions.interval || 1);
        break;
    }
  }

    count++;
  }

  return (
    <div>
      <h3 className="font-semibold mb-2">Recurring Dates Preview:</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
        {dates.map(date => (
          <div key={date} className="px-2 py-1 bg-gray-100 border rounded text-center">
            {date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniCalendarPreview;
