import { RecurrenceProvider } from "./recurrenceContext";
import RecurrenceOptions from "./RecurrenceOptions";
import CustomPatterns from "./CustomPatterns";
import DateRangePicker from "./DateRangePicker";
import MiniCalendarPreview from "./MiniCalendarPreview";

const RecurringDatePicker = () => {
  return (
    <RecurrenceProvider>
      <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow space-y-6 border">
        <h2 className="bg-blue-100 text-lg font-bold text-center">Recurring Date Picker</h2>
        <RecurrenceOptions />
        <CustomPatterns />
        <DateRangePicker />
        <MiniCalendarPreview />
      </div>
    </RecurrenceProvider>
  );
};

export default RecurringDatePicker;