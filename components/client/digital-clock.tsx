"use client";
import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState<Date>(new Date());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    setIsClient(true);

    // Clean up the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  // Format time to HH:MM:SS
  const formatTime = (date: Date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  console.log(isClient ? "This is never prerendered" : "Prerendered");

  return (
    <div className="digital-clock">
      <h2>{formatTime(time)}</h2>
      <h1 className="hidden">
        {isClient ? "This is never prerendered" : "Prerendered"}
      </h1>
    </div>
  );
}

export default DigitalClock;
