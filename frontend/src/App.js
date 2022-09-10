import { Chats } from './components/Chats';
import { Homepage } from './components/Homepage';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chats} />
    </div>
  );
}

export default App;
