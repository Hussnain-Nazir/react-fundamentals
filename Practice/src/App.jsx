import Greeting from './components/jsx';
import Counter from './components/virtual-dom';
import FruitList from './components/reconciliation';

function App() {
  return (
    <div>
      <Greeting />
      <hr />
      <Counter />
      <hr />
      <FruitList />
    </div>
  );
}

export default App; 