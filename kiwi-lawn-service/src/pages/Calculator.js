import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const servicesList = [
  { name: "Lawn Mowing", baseRate: 0.25 },
  { name: "Hedge and Tree Trimming", baseRate: 0.40 },
  { name: "Rubbish Removal (Big Clean-Ups)", baseRate: 0.60 },
  { name: "Gardening Services", baseRate: 0.30 },
  { name: "Water Blasting", baseRate: 0.50 },
  { name: "Yard Cleaning", baseRate: 0.45 },
];

function Calculator() {
  const [size, setSize] = useState(0);
  const [height, setHeight] = useState("short");
  const [selectedServices, setSelectedServices] = useState([]);
  const [quote, setQuote] = useState(null);

  const handleServiceSelect = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const calculateQuote = async () => {
    const response = await fetch("https://lawn-calc-app-39609e86578e.herokuapp.com/calculate-quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ size_m2: size, grass_height: height, selected_services: selectedServices }),
    });

    const result = await response.json();
    setQuote(result.estimated_cost);
  };

  return (
    <div className="container my-5">
      <div className="card p-4 shadow">
        <h2 className="text-center text-success mb-4">Get a Quote</h2>

        <label className="form-label">Lawn Size (m²)</label>
        <input type="number" className="form-control" value={size} onChange={(e) => setSize(e.target.value)} />

        <label className="form-label mt-3">Grass Height</label>
        <select className="form-select" value={height} onChange={(e) => setHeight(e.target.value)}>
          <option value="short">Short</option>
          <option value="medium">Medium</option>
          <option value="overgrown">Overgrown</option>
        </select>

        <label className="form-label mt-3">Select Services</label>
        {servicesList.map((service, index) => (
          <div className="form-check" key={index}>
            <input
              type="checkbox"
              className="form-check-input"
              checked={selectedServices.includes(service.name)}
              onChange={() => handleServiceSelect(service.name)}
            />
            <label className="form-check-label">{service.name}</label>
          </div>
        ))}

        <button className="btn btn-success mt-4 w-100" onClick={calculateQuote}>Get Estimate</button>

        {quote !== null && <h2 className="text-center text-success mt-4">Estimated Cost: ${quote}</h2>}
      </div>
    </div>
  );
}

export default Calculator;
