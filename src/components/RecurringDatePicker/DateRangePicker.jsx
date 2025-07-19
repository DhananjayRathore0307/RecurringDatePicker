import { useRecurrence } from "./recurrenceContext";

const DateRangePicker = () => {
  const { dateRange, setDateRange } = useRecurrence();

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div>
        <label className="text-sm font-medium">Start Date</label>
        <input
          type="date"
          className="block w-full px-3 py-2 border rounded"
          value={dateRange.start}
          onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
        />
      </div>
      <div>
        <label className="text-sm font-medium">End Date (optional)</label>
        <input
          type="date"
          className="block w-full px-3 py-2 border rounded"
          value={dateRange.end}
          onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
        />
      </div>
    </div>
  );
};

export default DateRangePicker;