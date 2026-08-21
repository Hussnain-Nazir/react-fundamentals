// React Diffing/Reconciliation Algorithm

import React, { useState } from 'react';

function FruitList() {
  const [fruits, setFruits] = useState(['Apple', 'Banana', 'Cherry']);

  const addFruit = () => {
    setFruits([...fruits, 'Mango']);
  };

  /* The "key" prop helps React's diffing algorithm know
  which list item is which, so it only adds the new one
  instead of re-rendering the entire list. */

  return (
    <div>
      <button onClick={addFruit}>Add Mango</button>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;