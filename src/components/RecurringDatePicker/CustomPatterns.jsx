import { useRecurrence } from "./recurrenceContext";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const CustomPatterns = () => {
  const { recurrence, customOptions, setCustomOptions } = useRecurrence();

  const toggleDay = (dayIdx) => {
    const newDays = new Set(customOptions.days || []);
    newDays.has(dayIdx) ? newDays.delete(dayIdx) : newDays.add(dayIdx);
    setCustomOptions(prev => ({
      ...prev,
      days: Array.from(newDays).sort(), 
    }));
  };

  return (
    <div className="space-y-3">
      <div>
        <label className="text-sm font-medium">Repeat every</label>
        <input
          type="number"
          min="1"
          className="ml-2 w-20 px-2 py-1 border rounded"
          value={customOptions.interval}
          onChange={(e) =>
            setCustomOptions((prev) => ({
              ...prev,
              interval: +e.target.value,
            }))
          }
        />
        <span className="ml-1 text-sm text-gray-500">{recurrence}</span>
      </div>

      {recurrence === "weekly" && (
        <div className="flex gap-2 flex-wrap">
          {daysOfWeek.map((day, idx) => {
            const isSelected = customOptions.days ?.includes(idx);
            return (
              <button
                key={day}
                onClick={() => toggleDay(idx)}
                className={`px-3 py-1 rounded-full text-sm transition ${isSelected ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}>
                {day}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CustomPatterns;
