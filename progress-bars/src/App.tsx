import React from "react";
import ProgressBar, { ProgressBarData } from "./ProgressBar";
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  const data: ProgressBarData[] = [
    ["Utopia", 77, [
      ["Health", 55, [
        ["No RSI", 80, []],
        ["No Obesity", 70, []]
      ]],
      ["Happiness", 45, [
        ["No Depression", 75, []],
        ["Abundant, fulfilling work-play", 55, []]
      ]]
    ]]
  ];

  return (
    <div className="container">
      {data.map((bar, i) => (
        <ProgressBar key={i} data={bar} />
      ))}
    </div>
  );
};

export default App;
