import Greeting from './components/jsx';
import Counter from './components/virtual-dom';
import FruitList from './components/reconciliation';
import WelcomeMessage from './components/simple-component';

function App() {
  return (
    <div>
      <WelcomeMessage />
      <hr />
      <Greeting />
      <hr />
      <Counter />
      <hr />
      <FruitList />
    </div>
  );
}

export default App;