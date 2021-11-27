import './App.css';
import { Provider } from 'react-redux';

// components
import Counter from './components/counter';

// redux store
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
