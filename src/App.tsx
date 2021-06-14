import React, { useEffect, useState } from "react";
import logo from "./assets/logo.svg";
import "./App.css";
import ScaleBox from "./components/ScaleBox";
import Progress from "./components/Progress";

const getCurrentTime = () => new Date().getTime() / 1000;

function App() {
  const [currentTime, setCurrentTime] = useState<number>(getCurrentTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const getTime = getCurrentTime();
      setCurrentTime(getTime);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>

      <main>
        <ScaleBox />
        <Progress currentTime={currentTime} />
      </main>

      <footer>白驹过隙，时光荏苒</footer>
    </div>
  );
}

export default App;
