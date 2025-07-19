import RecurringDatePicker from "./components/RecurringDatePicker/RecurringDatePicker";
import { RecurrenceProvider } from "./components/RecurringDatePicker/recurrenceContext";

function App() {
  return (
    <RecurrenceProvider>
      <div className="min-h-screen bg-red-100 flex items-center justify-center p-4">
        <RecurringDatePicker />
      </div>
    </RecurrenceProvider>
  );
}

export default App;
