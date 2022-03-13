import React from "react";
import group2 from "../images/group2.png";
import group3 from "../images/group3.png";
import combined from "../images/combined.png";

type StatisticsType = {
  period: string;
  previousPeriod: string;
  currentSeearch: number;
  previousSearch: number;
  currentClick: number;
  previousClick: number;
  currentSales: number;
  previousSales: number;
  ctr: number;
  str: number | null;
  avgCheck: number;
};

const Statistics = ({
  period,
  currentSeearch,
  previousSearch,
  currentClick,
  previousClick,
  currentSales,
  previousSales,
  ctr,
  str,
  avgCheck,
  previousPeriod
}: StatisticsType) => {
  return (
    <div className="statistics__container">
      <div className="statistics__card">
        <div className="card__first">
          <div className="avatar">
            <img src={group3} alt="group avatr" /> <br />
            <img src={combined} alt="group2 avatar" />
          </div>
          <div className="card__details">
            <h5>
              Searches{" "}
              <span>
                {previousSearch - currentSeearch > 0
                  ? (previousSearch - currentSeearch).toLocaleString()
                  : 0}
                %
              </span>
            </h5>
            <h5>
              {currentSeearch ? currentSeearch.toLocaleString() : 0}{" "}
              <span>{period}</span>
            </h5>
            <h5>
              {previousSearch ? previousSearch.toLocaleString() : 0}{" "}
              <span>{previousPeriod}</span>
            </h5>
          </div>
        </div>
        <div className="card__second">
          <h5>Mobile traffic: 100%</h5>
          <h5>Web traffic: 100%</h5>
          <p>You get 100% traffic on mobile and desktop devices.</p>
          <p className="help">
            Help: <span className="helps">Searches, Pessimisation</span>
          </p>
        </div>
      </div>

      {/* Clicks */}
      <div className="statistics__card">
        <div className="card__first">
          <div className="avatar">
            <img src={group2} alt="group avatr" /> <br />
            <img src={combined} alt="group2 avatar" />
          </div>
          <div className="card__details">
            <h5>
              Clicks{" "}
              <span>
                {previousClick - currentClick > 0
                  ? (previousClick - currentClick).toLocaleString()
                  : 0}
                %
              </span>
            </h5>
            <h5>
              {currentClick ? currentClick : 0} <span>{period}</span>
            </h5>
            <h5>
              {previousClick ? previousClick : 0}{" "}
              <span>{previousPeriod}</span>
            </h5>
          </div>
        </div>
        <div className="card__second">
          <h5>CTR: {ctr ? ctr.toFixed(2) : 0}%</h5>

          <p>Conversion from searches to clicks on all devices.</p>
          <p className="help">
            Help: <span className="helps">CTR, Cliks</span>
          </p>
        </div>
      </div>

      {/* Sales */}
      <div className="statistics__card">
        <div className="card__first">
          <div className="avatar">
            <img src={group3} alt="group avatr" /> <br />
            <img src={combined} alt="group2 avatar" />
          </div>
          <div className="card__details">
            <h5>
              Sales{" "}
              <span>
                {previousSales - currentSales > 0
                  ? (previousSales - currentSales).toLocaleString()
                  : 0}
                %
              </span>
            </h5>
            <h5>
              {currentSales ? currentSales : 0}% <span>{period}</span>
            </h5>
            <h5>
              {previousSales ? previousSales : 0} <span>{previousPeriod}</span>
            </h5>
          </div>
        </div>
        <div className="card__second">
          <h5>STR: {str ? str.toFixed(2) : 0}%</h5>
          <h5>Avg. Check: {avgCheck}</h5>
          <p>Conversion from cliks to bookings on all devices.</p>
          <p className="help">
            Help: <span className="helps">STR, Bookings, Avg. Check</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
