import './App.css';
import Quote from './Components/Quote';
import { useSelector } from 'react-redux';

function App() {
  const { accentColor } = useSelector((state) => state.quote);
  return (
    <div className="App" style={{ backgroundColor: accentColor, color: accentColor }}>
      <header className="App-header">
        <Quote/>
      </header>
    </div>
  );
}

export default App;
