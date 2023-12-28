import './App.css';
import Quote from './Components/Quote';
import { useSelector } from 'react-redux';

function App() {
  const { accentColor } = useSelector((state) => state.quote);
  return (
    <div className="App" style={{ backgroundColor: accentColor, color: accentColor }}>
      <header className="App-header">
        <Quote/>
        <p style={{fontSize: "16px"}} className='mt-1'>by barishm</p>
      </header>
    </div>
  );
}

export default App;
