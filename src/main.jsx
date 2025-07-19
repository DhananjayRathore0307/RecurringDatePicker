import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {RecurrenceProvider} from "./components/RecurringDatePicker/recurrenceContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecurrenceProvider>
    <App />
    </RecurrenceProvider>
  </React.StrictMode>
);