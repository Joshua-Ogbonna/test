import React from "react";
import oval from "../images/oval.svg";

type MetricTypes = {
  error: number | null;
  zeroes: number | null;
  timeouts: number | null;
}

const Metrics = ({ error, zeroes, timeouts }: MetricTypes) => {
  return (
    <div className="metrics__container">
      <div className="metrics__card">
        <img src={oval} alt="oval avatar" />
        <div className="metrics__information">
          <h5>Errors: {error ? error.toFixed(2) : 0}%</h5>
          <p>Average: 0,11%</p>
        </div>
      </div>

      <div className="metrics__card">
        <img src={oval} alt="oval avatar" />
        <div className="metrics__information">
          <h5>Zeroes: {zeroes ? zeroes.toFixed(2) : 0}%</h5>
          <p>Average: 0,11%</p>
        </div>
      </div>

      <div className="metrics__card">
        <img src={oval} alt="oval avatar" />
        <div className="metrics__information">
          <h5>Timeouts: {timeouts ? timeouts.toFixed(2) : 0}%</h5>
          <p>Average: 0,11%</p>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
