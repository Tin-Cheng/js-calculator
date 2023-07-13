import { useState } from 'react';
import './App.css';

function App() {
  const [total,setTotal] = useState(0);
  const [currentString,setCurrentString] = useState("");
  const [display,setDisplay] = useState(total);
  const [nextOperation,setNextOperation] = useState("");
  const clearCurrentString = (val) => {
    setCurrentString("");
    setTotal(0);
    updateDisplay(0);
  }
  const updateCurrentString = (val) => {
    let tempString = currentString;
    if(tempString.length >= 15) return;
    if(val==="." && tempString.includes(".")) return;
    if(val === "." && (tempString ==="" || tempString === "0")){
      tempString = "0.";
    }else if(tempString==="0"){
      tempString = val;
    }else{
      tempString = tempString + val;
    }
    setCurrentString(tempString);
    updateDisplay(tempString);
  }
  const updateDisplay = (tempString) => {
    if(tempString !== ""){
      setDisplay(tempString);
    }else{
      setDisplay(total);
    }
  }
  const calculate = (nextOpt) => {
    if(currentString==="-"){
      setCurrentString("");
    }
    if(currentString.length===0 && nextOpt === "-"){
      setCurrentString("-");
      setDisplay("-");
      return;
    } 
    const opt = nextOperation;
    setNextOperation(nextOpt);
    if(currentString.length===0 || currentString === "-"){
      return;
    } 
    let tempTotal = total;
    let current = parseFloat(currentString);
    switch(opt){
      case "+":
        tempTotal += current;
        break;
      case "-":
        tempTotal -= current;
        break;
      case "*":
        tempTotal *= current;
        break;
      case "/":
        tempTotal /= current;
        break;
      default:
        tempTotal = current;
        break;
    }
    setCurrentString("");
    setTotal(tempTotal);
    if(opt !== "=")
      updateDisplay(tempTotal);
    else
      updateDisplay(nextOpt);

  }


  return (
    <div className="App">
      <div className="grid-container">
        <div id="display" className="display">{display}</div>
        <div id="clear" className="button clear" onClick={() => clearCurrentString()}>AC</div>
        <div id="divide" className="button operation" onClick={() => calculate("/")}>/</div>
        <div id="multiply" className="button operation" onClick={() => calculate("*")}>x</div>
        <div id="seven" className="button number" onClick={() => updateCurrentString("7")}>7</div>
        <div id="eight" className="button number" onClick={() => updateCurrentString("8")}>8</div>
        <div id="nine" className="button number" onClick={() => updateCurrentString("9")}>9</div>
        <div id="subtract" className="button operation" onClick={() => calculate("-")}>-</div>
        <div id="four" className="button number" onClick={() => updateCurrentString("4")}>4</div>
        <div id="five" className="button number" onClick={() => updateCurrentString("5")}>5</div>
        <div id="six" className="button number" onClick={() => updateCurrentString("6")}>6</div>
        <div id="add" className="button operation" onClick={() => calculate("+")}>+</div>
        <div id="one" className="button number" onClick={() => updateCurrentString("1")}>1</div>
        <div id="two" className="button number" onClick={() => updateCurrentString("2")}>2</div>
        <div id="three" className="button number" onClick={() => updateCurrentString("3")}>3</div>
        <div id="equals" className='button equals' onClick={() => calculate("=")}>=</div>
        <div id="zero" className="button number zero" onClick={() => updateCurrentString("0")}>0</div>
        <div id="decimal" className="button number" onClick={() => updateCurrentString(".")}>.</div>
      </div>
    </div>
  );
}

export default App;
