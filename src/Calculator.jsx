import React, { useState } from 'react';

import NumPad from './NumPad';
import OutputField from './OutputField';

import "./style.css";

function Calculator() {
  const [value, setValue] = useState("");

  const [number, setNumber] = useState(null);

  const [changeFlag, setChangeFlag] = useState(false);

  const [operator, setOperator] = useState("");

  function mathOperation(num1, num2, opeartor) {
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
      if (number != null && value != "") {
        /*         if (changeFlag) {
                  var num = number;
                  setNumber(parseFloat(value));
                  setValue(num);
                  setChangeFlag(false);
                } */
        setValue(mathOperation(number, parseFloat(value), operator));
      }
    }
    else if (numpad_key == "C") {
      setNumber(null);
      setValue("");
    }
    else if (numpad_key == "+" || numpad_key == "-" || numpad_key == "x" || numpad_key == "/") {
      setOperator(numpad_key);
      //setChangeFlag(true);

      if (number == null) {
        setNumber(parseFloat(value));
        setValue("");
      }

      else if (value != "") {
        setNumber(mathOperation(number, parseFloat(value), numpad_key));
        setValue("");
      }
    }
    else {
      setValue(value + numpad_key);
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

      <a>{number}</a>
    </div>
  );
}

export default Calculator;
