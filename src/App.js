import './App.css';
import Users from './components/Users';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Users/>
        </header>
      </div>
    </Provider>
  );
}

export default App;
