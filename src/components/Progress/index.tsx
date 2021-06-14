import React from "react";
import "./index.css";

const getWidthPercent = (currentTime?: number) => {
  if (!currentTime) {
    return 0;
  }
  const endofDay = new Date().setHours(23, 59, 59, 0) / 1000;
  const widthPercent = 100 - (endofDay - currentTime) / 864;
  return widthPercent;
};

const Index = ({ currentTime }: { currentTime?: number }) => {
  const widthPercent = getWidthPercent(currentTime);
  return <div style={{ width: widthPercent + "%" }} className='progress' />;
};

export default Index;
