import { useRecurrence } from "./recurrenceContext";

const options = ["daily", "weekly", "monthly", "yearly"];

const RecurrenceOptions = () => {
  const { recurrence, setRecurrence } = useRecurrence();

  return (
    <div className="flex gap-2">
      {options.map(opt => (
        <button
          key={opt}
          className={`px-4 py-2 rounded-full transition ${recurrence === opt ? "bg-red-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}

          onClick={() => setRecurrence(opt)}
        >
          {opt.charAt(0).toUpperCase() + opt.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default RecurrenceOptions;