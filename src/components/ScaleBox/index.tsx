import React, { memo } from "react";
import "./index.css";

const HOURS = 24;

const Index = () => {
  const ary = Array(HOURS + 1).fill("");
  return (
    <div className='scale-box-wrapper'>
      {ary.map((item, index) => {
        if (index !== ary.length - 1) {
          return (
            <React.Fragment key={index}>
              <HourScale hour={index} />
              <MinuteScale />
            </React.Fragment>
          );
        }
        return <HourScale hour={index} key={index} />;
      })}
    </div>
  );
};

export default memo(Index);

const HourScale = ({ hour }: { hour: number }) => {
  return (
    <div className='hour-scale'>
      <span className='hour-scale-title'>{hour}</span>
    </div>
  );
};

const MinuteScale = () => {
  const ary = Array(5).fill("");
  return (
    <>
      {ary.map((item, index) => (
        <div
          key={index}
          className={`minute-scall ${index === 2 ? "minute-scall-half" : ""}`}
        />
      ))}
    </>
  );
};
