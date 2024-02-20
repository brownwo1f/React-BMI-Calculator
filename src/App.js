import React from "react";
import "./App.css";
import { useState } from "react";
const App = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [result, setResult] = useState(0);
  const [message, setMessage] = useState("");

  const bmi = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (weight <= 0 || height <= 0) {
      alert("Error! Please enter valid weight and height");
    } else {
      let meterH = height / 100;
      meterH = Math.pow(meterH, 2);
      let bmi = weight / meterH;
      setResult(bmi);

      if (bmi < 18.5)
        setMessage(
          "You are underweight, consider increasing calories and physical activity."
        );
      else if (bmi < 24.9) setMessage("You are a healthy weight, keep it up!");
      else if (bmi < 29.9)
        setMessage(
          "You are overweight, consider adding some more physical activity to your day."
        );
      else
        setMessage(
          "You are obese, consider cutting on calories and increase physical activity."
        );

      document.getElementById("info").classList.remove("hidden");
    }
  };

  const reset = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setHeight(0);
    setWeight(0);
    setResult(0);
    setMessage("");
    document.getElementById("info").classList.add("hidden");
  };

  return (
    <>
      <div className="container">
        <h1 id="head">BMI Calculator</h1>
        <form>
          <label htmlFor="weight">Weight (kg)</label>
          <br />
          <input
            type="number"
            onChange={(e) => setWeight(e.target.value)}
            value={weight}
          ></input>
          <br />
          <label htmlFor="height">Height (cms)</label>
          <br />
          <input
            type="number"
            onChange={(e) => setHeight(e.target.value)}
            value={height}
          ></input>
          <br />
          <div id="button">
            <button type="submit" onClick={bmi}>
              Calculate BMI
            </button>
            <button type="submit" onClick={reset}>
              Reset
            </button>
          </div>
        </form>
        <div className="hidden" id="info">
          <p>Your BMI is : {result.toFixed(1)}</p>
          <p>{message}</p>
        </div>
      </div>
    </>
  );
};

export default App;
