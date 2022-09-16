import Chats from './components/Chats';
import HomePage from './components/HomePage';
import { Route } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className='App'>
      <Route path="/" component={HomePage} exact />
      <Route path="/chats" component={Chats} />
    </div>
  );
}

export default App;
