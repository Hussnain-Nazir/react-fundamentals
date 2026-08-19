// UseEffect Lifecycle Hook

import React, { useState, useEffect } from 'react';

function HooksClock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // This part runs once when the component appears on the screen
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // This "cleanup" function runs when the component disappears from the screen
    return () => clearInterval(timerId);
  }, []); // empty [] means "only run this once, on mount"

  return <h2>Current time: {time}</h2>;
}

export default HooksClock;