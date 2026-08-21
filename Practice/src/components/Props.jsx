// Props

import React from 'react';

// This component receives "name" and "age" as props from its parent
function UserProfile({ name, age }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

// Passing data down as props
function UserList() {
  return (
    <div>
      <UserProfile name="Ahmed" age={28} />
      <UserProfile name="Fatima" age={34} />
    </div>
  );
}

export default UserList;