"use client"; 

import React, { useState } from "react";
import DateRange from "./component/DateRange"; 

const Page = () => {
  const [selectedDateRange, setSelectedDateRange] = useState(null); 

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Welcome, Archana!</h1>
      <div>
        <h2>Date Range</h2>
        {selectedDateRange ? (
          <p>
            Selected Date Range:{" "}
            {new Date(selectedDateRange[0].startDate).toLocaleDateString()} -{" "}
            {new Date(selectedDateRange[0].endDate).toLocaleDateString()}
          </p>
        ) : (
          <p>No date range selected</p>
        )}
      </div>

      <DateRange setDateRange={setSelectedDateRange} />
    </div>
  );
};

export default Page;
