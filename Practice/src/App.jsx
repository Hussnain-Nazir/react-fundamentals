import React from 'react';
import Greeting from './components/jsx';
import Counter from './components/virtual-dom';
import FruitList from './components/reconciliation';
import WelcomeMessage from './components/simple-component';
import ParentPage from './components/parent-child';
import Clock from './components/lifecycle-methods';
import HooksClock from './components/useeffect-lifecycle';
import LightSwitch from './components/state';
import UserList from './components/Props';
import Counters from './components/state-vs-props';


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
      <hr />
      <HooksClock />
      <hr />
      <LightSwitch />
      <hr />
      <UserList />
      <hr />
      <Counters />
    </div>
  );
}

export default App;