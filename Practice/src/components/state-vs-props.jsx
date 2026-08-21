// State vs Props

import React, { useState } from 'react';

// Child receives "label" as a PROP - it cannot change it
function Counter({ label }) {
  // "count" is STATE — owned and changed by this component itself
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>{label}</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

function Counters() {
  return (
    <div>
      <Counter label="Counter A" />
      <Counter label="Counter B" />
    </div>
  );
}

export default Counters;