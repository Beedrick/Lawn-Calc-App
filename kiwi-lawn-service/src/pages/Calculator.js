import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Calculator() {
  const [size, setSize] = useState(0);
  const [height, setHeight] = useState("short");
  const [edging, setEdging] = useState(false);
  const [quote, setQuote] = useState(null);

  const calculateQuote = async () => {
    const response = await fetch("https://lawn-calc-app-39609e86578e.herokuapp.com/calculate-quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ size_m2: size, grass_height: height, edging }),
    });

    const result = await response.json();
    setQuote(result.estimated_cost);
  };

  return (
    <div className="main-container">
      <h1 className="text-center text-success">Lawn Service Quote</h1>
      <div className="card p-4 shadow">
        <label className="form-label">Lawn Size (m²)</label>
        <input type="number" className="form-control" value={size} onChange={(e) => setSize(e.target.value)} />

        <label className="form-label mt-2">Grass Height</label>
        <select className="form-select" value={height} onChange={(e) => setHeight(e.target.value)}>
          <option value="short">Short</option>
          <option value="medium">Medium</option>
          <option value="overgrown">Overgrown</option>
        </select>

        <div className="form-check mt-2">
          <input type="checkbox" className="form-check-input" checked={edging} onChange={(e) => setEdging(e.target.checked)} />
          <label className="form-check-label">Include Edging</label>
        </div>

        <button className="btn btn-success mt-3 w-100" onClick={calculateQuote}>Get Estimate</button>

        {quote !== null && <h2 className="text-center text-success mt-3">Estimated Cost: ${quote}</h2>}
      </div>
    </div>
  );
}

export default Calculator;
