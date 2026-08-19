import React from 'react';
import Greeting from './components/jsx';
import Counter from './components/virtual-dom';
import FruitList from './components/reconciliation';
import WelcomeMessage from './components/simple-component';
import ParentPage from './components/parent-child';
import Clock from './components/lifecycle-methods';

function App() {
  return (
    <div>
      <Greeting />
      <hr />
      <Counter />
      <hr />
      <FruitList />
      <hr />
      <WelcomeMessage />
      <hr />
      <ParentPage />
      <hr />
      <Clock />
    </div>
  );
}

export default App;