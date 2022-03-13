import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";
import Metrics from "./components/Metrics";
import Statistics from "./components/Statistics";
import ErrorTracking from "./components/ErrorTracking";

function App() {
  const [activeBar, setActiveBar] = useState("Last Hour");
  const { info } = useSelector((state) => state);
  let information = info.data[0];
  console.log(info);

  const handleActiveBar = (bar: string) => {
    setActiveBar(bar);
  };

  const handleActiveClass = (bar: string) => {
    if (bar === activeBar) {
      return `action__bar active__bar`;
    } else {
      return `action__bar`;
    }
  };

  return (
    <div className="App shadow bg-body p-3">
      {/* Component Header */}
      <div className="component__head">
        <h1>Main Metrics</h1>
        <div className="component__actionBars">
          <div
            className={handleActiveClass("Last Hour")}
            onClick={() => handleActiveBar("Last Hour")}
          >
            Last Hour
          </div>
          <div
            className={handleActiveClass("Today")}
            onClick={() => handleActiveBar("Today")}
          >
            Today
          </div>
          <div
            className={handleActiveClass("Yesterday")}
            onClick={() => handleActiveBar("Yesterday")}
          >
            Yesterday
          </div>
          <div
            className={handleActiveClass("Last 3 days")}
            onClick={() => handleActiveBar("Last 3 days")}
          >
            Last 3 days
          </div>
        </div>
      </div>

      {/* Conditional Renderings */}
      {activeBar === "Yesterday" && (
        <>
          <Metrics
            error={info.data[0].errors_yesterday}
            zeroes={info.data[0].zeroes_yesterday}
            timeouts={info.data[0].timeout_yesterday}
          />
          <ErrorTracking errors={info.errors_yesterday} />
          <Statistics
            period="Yesterday"
            currentSeearch={information.searches_current_yesterday}
            previousSearch={information.searches_previous_yesterday}
            currentClick={information.clicks_current_yesterday}
            previousClick={information.clicks_previous_yesterday}
            currentSales={information.bookings_current_yesterday}
            previousSales={information.bookings_previous_yesterday}
            ctr={information.ctr_yesterday}
            str={information.str_yesterday}
            avgCheck={information.avg_price_yesterday}
            previousPeriod="Yesterday"
          />
        </>
      )}

      {/* Last Hour */}
      {activeBar === "Last Hour" && (
        <>
          <Metrics
            error={info.data[0].errors_last_hour}
            zeroes={info.data[0].zeroes_last_hour}
            timeouts={info.data[0].timeout_last_hour}
          />
          <ErrorTracking errors={info.errors_last_hour} />
          <Statistics
            period="Last Hour"
            currentSeearch={information.searches_current_last_hour}
            previousSearch={information.searches_previous_last_hour}
            currentClick={information.clicks_current_last_hour}
            previousClick={information.clicks_previous_last_hour}
            currentSales={information.bookings_current_last_hour}
            previousSales={information.bookings_previous_last_hour}
            ctr={information.ctr_last_hour}
            str={information.str_last_hour}
            avgCheck={information.avg_price_last_hour}
            previousPeriod="Previous Hour"
          />
        </>
      )}

      {/* Today */}
      {activeBar === "Today" && (
        <>
          <Metrics
            error={info.data[0].errors_today}
            zeroes={info.data[0].zeroes_today}
            timeouts={info.data[0].timeout_today}
          />
          <ErrorTracking errors={info.errors_today ? info.errors_last_hour : []} />
          <Statistics
            period="Today"
            currentSeearch={information.searches_current_today}
            previousSearch={information.searches_previous_today}
            currentClick={information.clicks_current_today}
            previousClick={information.clicks_previous_today}
            currentSales={information.bookings_current_today}
            previousSales={information.bookings_previous_today}
            ctr={information.ctr_today}
            str={information.str_today}
            avgCheck={information.avg_price_today}
            previousPeriod="Yesterday"
          />
        </>
      )}

      {/* Last three days */}
      {activeBar === "Last 3 days" && (
        <>
          <Metrics
            error={info.data[0].errors_last_3days}
            zeroes={info.data[0].zeroes_last_3days}
            timeouts={info.data[0].timeout_last_3days}
          />
          <ErrorTracking errors={info.errors_last_3days} />
          <Statistics
            period="Last 3 Days"
            currentSeearch={information.searches_current_last_3days}
            previousSearch={information.searches_previous_last_3days}
            currentClick={information.clicks_current_last_3days}
            previousClick={information.clicks_previous_last_3days}
            currentSales={information.bookings_current_last_3days}
            previousSales={information.bookings_previous_last_3days}
            ctr={information.ctr_last_3days}
            str={information.str_last_3days}
            avgCheck={information.avg_price_last_3days}
            previousPeriod="Yesterday"
          />
        </>
      )}
    </div>
  );
}

export default App;
