import React, { useState, useEffect, useRef } from "react";

function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsetTime, setElapseTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if(isRunning) {
        intervalIdRef.current = setInterval(() => {
            setElapseTime(Date.now() - startTimeRef.current);
        }, 10)
    }

    return() => {
        clearInterval(intervalIdRef.current);
    }
  }, [isRunning]);

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsetTime;
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setElapseTime(0);
    setIsRunning(false);
  }

  function formatTime() {
    let hours = Math.floor(elapsetTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsetTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsetTime / 1000 % 60);
    let milliseconds = Math.floor(elapsetTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    return `${minutes}:${seconds}:${milliseconds}`
  }

  return (
    <div className="flex flex-col items-center border-4 rounded-xl bg-white p-10">
      <div className="text-6xl font-mono font-bold text-gray-600 mb-10">{formatTime()}</div>
      <div>
        <button className="text-2xl font-bold py-2.5 px-5 m-1.5 min-w-32 border-none rounded-lg cursor-pointer text-white transition duration-500 ease-linear bg-green-600 hover:bg-green-700" onClick={start}>Start</button>
        <button className="text-2xl font-bold py-2.5 px-5 m-1.5 min-w-32 border-none rounded-lg cursor-pointer text-white transition duration-500 ease-linear bg-red-600 hover:bg-red-700" onClick={stop}>Stop</button>
        <button className="text-2xl font-bold py-2.5 px-5 m-1.5 min-w-32 border-none rounded-lg cursor-pointer text-white transition duration-500 ease-linear bg-blue-600 hover:bg-blue-700" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default StopWatch;
