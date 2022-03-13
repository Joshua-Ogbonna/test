import React, { useEffect, useState } from "react";

interface IErrorTracking {
  count: number;
  code: number;
}

type ErrorTrackingTypes = {
  errors: IErrorTracking[] | [];
};

const ErrorTracking = ({ errors }: ErrorTrackingTypes) => {
  const [countTotal, setCountTotal] = useState<number>(0);

  useEffect(() => {
    if (errors.length > 0) {
      const newArray = errors
        .map((error) => {
          return error.count;
        })
        .reduce((acc, tot) => acc + tot);
      setCountTotal(newArray);
    }
  }, [errors]);

  return (
    <>
      {" "}
      <div className="error__tracking">
        {errors.length > 0
          ? errors.map((error) => (
              <div
                className={
                  error.code === 502
                    ? "five_02"
                    : error.code === 599
                    ? "five_99"
                    : error.code === 500
                    ? "five_00"
                    : error.code === 501
                    ? "five_00"
                    : "other"
                }
                key={error.code}
                style={{
                  width: `${Math.round((error.count / countTotal) * 100)}%`,
                }}
                // {Math.round((error.count / countTotal) * 100)}
              ></div>
            ))
          : ""}
      </div>
      <div className="data__point">
      {errors.length > 0
        ? errors.map((error) => (
              <p>
                <span
                  className={
                    error.code === 502
                      ? "five_02_point"
                      : error.code === 599
                      ? "five_99_point"
                      : error.code === 500
                      ? "five_00_point"
                      : error.code === 501
                      ? "five_01_point"
                      : "other__point"
                  }
                ></span>
                Error: {error.code ? error.code : "Others"}: {error.count}
              </p>
          ))
        : ""}
          </div>
    </>
  );
};

export default ErrorTracking;
