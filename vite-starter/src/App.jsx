import { useState } from 'react'; import './App.css'; function App() {
  const [color, setColor] = useState('red');
  const [isDisabled, setDisabled] = useState(false);

  return (
    <div>
      <button 
        disabled={isDisabled} 
        onClick={() => setColor('blue')} className={color}
      >
        Change to { color == 'red' ? 'blue' : 'red' }
      </button>
      <br />
      <input 
        onClick={() => setDisabled(!isDisabled)}
        type='checkbox' 
        id='disable-button-checkbox' 
        defaultChecked={false} 
      />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
