// Composition

import React from 'react';

// A reusable "box" component
function Card({ children }) {
  return <div style={{ border: '1px solid gray', padding: '10px' }}>{children}</div>;
}

// We "compose" the Card
function CardList() {
  return (
    <div>
      <Card>
        <h2>Profile</h2>
        <p>Name: Ali</p>
      </Card>

      <Card>
        <h2>Settings</h2>
        <p>Dark mode: On</p>
      </Card>
    </div>
  );
}

export default CardList;