import { useState } from "react";
import "./Calculator.css";
import { evaluate } from "mathjs";
function Calculator() {
  let [result, setResult] = useState("");
  let [hasDot, setHasDot] = useState(false);

  let operator = ["+", "-", "/", "*"];

  const checkInput = (text) => {
    if (text === "÷") return "/";
    if (text === "×") return "*";
    return text;
  };

  const clickHandler = (e) => {
    let input = checkInput(e.target.innerText);
    if (input === ".") {
      if (hasDot === true) return;
      else setHasDot(true);
    }

    if (operator.includes(input)) {
      setHasDot(false);
    }

    setResult(result + input);
  };

  const clearBtn = () => {
    setResult("");
    setHasDot(false);
  };

  const cBtn = () => {
    if (result.endsWith(".")) setHasDot(false);
    setResult(result.slice(0, -1));
  };

  const equalBtn = () => {
    setResult(evaluate(result).toString());
    setHasDot(false);
  };
  return (
    <div className="container">
      <div className="screen">{result}</div>
      <div className="buttons">
        <button onClick={clearBtn} className="color twoCol">
          Clear
        </button>
        <button onClick={cBtn} className="color2">
          C
        </button>
        <button onClick={clickHandler} className="color">
          ÷
        </button>
        <button className="numColor" onClick={clickHandler}>
          7
        </button>
        <button className="numColor" onClick={clickHandler}>
          8
        </button>
        <button className="numColor" onClick={clickHandler}>
          9
        </button>
        <button onClick={clickHandler} className="color">
          ×
        </button>
        <button className="numColor" onClick={clickHandler}>
          4
        </button>
        <button className="numColor" onClick={clickHandler}>
          5
        </button>
        <button className="numColor" onClick={clickHandler}>
          6
        </button>
        <button onClick={clickHandler} className="color">
          -
        </button>
        <button className="numColor" onClick={clickHandler}>
          1
        </button>
        <button className="numColor" onClick={clickHandler}>
          2
        </button>
        <button className="numColor" onClick={clickHandler}>
          3
        </button>
        <button onClick={clickHandler} className="color">
          +
        </button>
        <button className="numColor" onClick={clickHandler}>
          0
        </button>
        <button className="numColor" onClick={clickHandler}>
          .
        </button>
        <button onClick={equalBtn} className="color4 twoCol">
          =
        </button>
      </div>
    </div>
  );
}
export default Calculator;
