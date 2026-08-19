// Virtual DOM

import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  /* Every time you click, React updates the Virtual DOM first, 
  compares it to the previous version, and only changes the
  <p> text in the real DOM — nothing else re-renders unnecessarily. */
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;