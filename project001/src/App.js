import MainBox from './MainBox';
import InputBox from './InputBox';
import {useState} from 'react';



function App() {
  const [colour, setColour] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className="App">
      <MainBox 
          colour={colour}  
          hexValue={hexValue} 
          isDarkText={isDarkText}
      />
      <InputBox 
          colour={colour} 
          setColour={setColour}
          setHexValue={setHexValue}
          isDarkText={isDarkText}
          setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
