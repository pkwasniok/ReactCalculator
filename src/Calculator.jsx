import React, { memo, useState } from 'react';

import NumPad from './NumPad';
import OutputField from './OutputField';

import "./style.css";

function Calculator() {
  const [value, setValue] = useState("");

  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [memory, setMemory] = useState(0);

  const [memoryReadFlag, setMemoryReadFlag] = useState(false);
  const [finalFlag, setFinalFlag] = useState(false);

  const [operator, setOperator] = useState("");

  function mathOperation(num1, num2, operator) {
    switch (operator) {
      case "+":
        return num1 + num2;
        break;
      case "-":
        return num1 - num2;
        break;
      case "x":
        return num1 * num2;
        break;
      case "/":
        return num1 / num2;
        break;
    }
  }

  function handleClick(numpad_key) {
    if (numpad_key == "=") {
      setFinalFlag(true);
      if (num1 != null && num2 == null) {
        setNum2(parseFloat(value));

        setNum1(mathOperation(num1, parseFloat(value), operator));
        setValue(mathOperation(num1, parseFloat(value), operator));
      }
      else {
        setNum1(mathOperation(num1, num2, operator));
        setValue(mathOperation(num1, num2, operator));
      }
    }
    else if (numpad_key == "CA") {
      setNum1(null);
      setNum2(null);
      setMemory(0);
      setMemoryReadFlag(false);
      setValue("");
    }
    else if ((numpad_key == "+" || numpad_key == "-" || numpad_key == "x" || numpad_key == "/") && value != "") {
      if (num1 == null && num2 == null) {
        setNum1(parseFloat(value));
      }
      else if (num1 != null && num2 == null) {
        setNum1(num1 + parseFloat(value));
      }
      else if (num1 != null && num2 != null) {
        setNum1(mathOperation(num1, num2, numpad_key));
        setNum2(parseFloat(value));
      }
      setOperator(numpad_key);
      setValue("");
    }
    else if (numpad_key == "MR") {
      if (!memoryReadFlag) {
        setValue(parseFloat(memory));
        setMemoryReadFlag(true);
      }
      else {
        setMemory(0);
        setMemoryReadFlag(false);
      }
    }
    else if (numpad_key == "M+" && value != "") {
      setMemory(memory + parseFloat(value));
    }
    else if (numpad_key == "M-" && value != "") {
      setMemory(memory - parseFloat(value));
    }
    else {
      if (finalFlag) {
        setValue(numpad_key);
        setFinalFlag(false);
      }
      else {
        setValue(value + numpad_key);
      }
    }
  }

  return (
    <div>
      <OutputField
        output={value}
      />

      <NumPad
        onClick={(value) => handleClick(value)}
      />
    </div >
  );
}

export default Calculator;
