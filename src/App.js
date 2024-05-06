import './App.css';
import './style.css'
import Joke from './Joke';

function App() {
  return (
    <div className="App">
    <div className="middle full_display col">
      <h1 style={{color:'black'}}>Joke Generator</h1>
            <h1 style={{color:'black'}}>Joke Generator Using React and Joke API</h1>
            <Joke/>
        </div>
    </div>
  );
}

export default App;
