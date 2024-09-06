import React, { useEffect, useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 
const formatDate = (date) => {
  return date ? date.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }) : "";
};

const DateRange = (props) => {
  const initialState = [
    {
      startDate: new Date(new Date().setHours(0, 0, 0, 0)), 
      endDate: new Date(),   
      key: "selection"
    },
  ];

  const [state, setState] = useState(initialState); // for holding the selected date

  useEffect(() => {
    if (typeof props.setDateRange === "function") {
      props.setDateRange(state);
    }
  }, []);
  const handleSelect = (ranges) => {
    setState([ranges.selection]);
  };
  const handleReset = () => {
    setState(initialState);
    if (typeof props.setDateRange === "function") {
      props.setDateRange(initialState);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.dateDisplay}>
        <span style={styles.dateText}>
          {formatDate(state[0]?.startDate) || "Select Start Date"} 
          {" - "} 
          {formatDate(state[0]?.endDate) || "Select End Date"}
        </span>
      </div>

      <div style={styles.datePickerWrapper}>
        <DateRangePicker
          ranges={state} 
          onChange={handleSelect}
          moveRangeOnFirstSelection={false} 
        />
      </div>
      <div style={styles.buttonWrapper}>
        <button style={styles.resetButton} onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};
const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    width: "fit-content",
    margin: "auto",
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  dateDisplay: {
    marginBottom: "15px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
  },
  dateText: {
    backgroundColor: "#f0f0f0",
    padding: "10px 20px",
    borderRadius: "5px",
    display: "inline-block",
  },
  datePickerWrapper: {
    marginBottom: "20px",
  },
  buttonWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  resetButton: {
    padding: "10px 20px",
    backgroundColor: "#ff6666",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
  },
};

export default DateRange;
