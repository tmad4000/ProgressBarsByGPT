// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




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
      ]],
      ["Prosperity", 45, [
        ["No Depression", 75, []],
        ["Abundant, fulfilling work-play", 55, []]
      ]],
      ["Tranquility", 45, [
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
