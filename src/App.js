import './App.css';
import Btn from "./components/btn";
import InputScreen from "./components/input";
import { useState } from "react";
import { evaluate } from "mathjs"

function App() {

  const [input, setInput] = useState("");

  const addInput = val => {
    setInput(input + val);
  };

  const calculateResult = () => {
    input ? setInput( evaluate(input)) : alert("Please enter a number");
  }


  return (
    <div className="App">
      <div className='calculatorDisplay'>
        <h1>REACT CALCULATOR</h1>
        <div className='inputDiv'>
        <InputScreen input={input}/>
        </div>
        <div className='buttonDisplay'>
            <ul className='ulDisplay'>
              <li><Btn clickAction={addInput}>1</Btn></li>
              <li><Btn clickAction={addInput}>2</Btn></li>
              <li><Btn clickAction={addInput}>3</Btn></li>
              <li><Btn clickAction={addInput}>+</Btn></li>
            </ul>
            <ul className='ulDisplay'>
              <li><Btn clickAction={addInput}>4</Btn></li>
              <li><Btn clickAction={addInput}>5</Btn></li>
              <li><Btn clickAction={addInput}>6</Btn></li>
              <li><Btn clickAction={addInput}>-</Btn></li>
            </ul>
            <ul className='ulDisplay'>
              <li><Btn clickAction={addInput}>7</Btn></li>
              <li><Btn clickAction={addInput}>8</Btn></li>
              <li><Btn clickAction={addInput}>9</Btn></li>
              <li><Btn clickAction={addInput}>*</Btn></li>
            </ul>
            <ul className='ulDisplay'>
              <li><Btn clickAction={calculateResult}>=</Btn></li>
              <li><Btn clickAction={addInput}>0</Btn></li>
              <li><Btn clickAction={addInput}>.</Btn></li>
              <li><Btn clickAction={addInput}>/</Btn></li>
            </ul>
        </div>
        <div className='clearBtn'>
          <Btn clickAction={ () => setInput("")}>CLEAR</Btn>
        </div>
      </div>
    </div>
  );
}

export default App;
