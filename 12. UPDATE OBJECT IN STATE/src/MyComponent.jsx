import React, { useState } from "react";

function MyComponent() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ferrari",
    model: "SF-90",
  });

  return(<div>
    <p>Your favourite car is: {car.year} {car.make} {car.model}</p>

    <input type="number" value={car.year} onChange={(event) => setCar(c => ({...c, year: event.target.value}))}/><br />
    <input type="text" value={car.make} onChange={(event) => setCar(c => ({...c, make: event.target.value}))}/><br />
    <input type="text" value={car.model} onChange={(event) => setCar(c => ({...c, model: event.target.value}))}/><br />
  </div>)
}

export default MyComponent;
