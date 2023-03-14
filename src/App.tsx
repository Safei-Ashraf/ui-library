import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import DropDown from './components/DropDown';
import { options } from './components/DropDown/mockData';
function App() {
  const [selected, setSelected] = useState({
    value: '',
    label: '',
    isDisabled: false,
    id: '',
  });

  return (
    <div className="App">
      <DropDown
        onSelect={setSelected}
        value={selected}
        options={options}
        label={''}
      />
    </div>
  );
}

export default App;
