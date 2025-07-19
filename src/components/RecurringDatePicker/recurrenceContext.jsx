import { createContext, useContext, useState } from "react";

const RecurrenceContext = createContext();

export const RecurrenceProvider = ({ children }) => {
  const [recurrence, setRecurrence] = useState("daily");
  const [customOptions, setCustomOptions] = useState({
    interval: 1,
    days: [],
  });
  const [dateRange, setDateRange] = useState({ start: "", end: "" });

  return (
    <RecurrenceContext.Provider
      value={{
        recurrence,
        setRecurrence,
        customOptions,
        setCustomOptions,
        dateRange,
        setDateRange,
      }}
    >
      {children}
    </RecurrenceContext.Provider>
  );
};

export const useRecurrence = () => useContext(RecurrenceContext);
