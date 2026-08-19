import Greeting from './components/jsx';
import Counter from './components/virtual-dom';
import FruitList from './components/reconciliation';
import WelcomeMessage from './components/simple-component';
import ParentPage from './components/parent-child';

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
    </div>
  );
}

export default App;