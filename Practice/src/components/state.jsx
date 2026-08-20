// State

import React, { useState } from 'react';

function LightSwitch() {
  // "isOn" is the current state value, "setIsOn" is how you change it
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <p>The light is {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={() => setIsOn(!isOn)}>Toggle</button>
    </div>
  );
}

export default LightSwitch;