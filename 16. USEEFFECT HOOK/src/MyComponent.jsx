import React, { useState, useEffect } from "react";

function MyComponent() {
  /* const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `You clicked ${count} times ${color}`;

    return () => {
        //SOME CLEANUP CODE

    }
  }, [count, color]);

  function changeColor() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }

  return (
    <>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Add</button>
      <button onClick={() => setCount((c) => c - 1)}>Subtract</button>
      <br />
      <button onClick={changeColor}>Change Color</button>
    </>
  ); */

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("EVENT LISTENER ADDED");

    return () => {
        window.removeEventListener("resize", handleResize);
        console.log("EVENT LISTENER REMOVED");
    }
  }, []);

  useEffect(() => {
    document.title = `Width: ${width} Height: ${height}`;
  }, [width, height]);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <>
      <p>Window Width: {width}</p>
      <p>Window Height: {height}</p>
    </>
  );
}

export default MyComponent;
