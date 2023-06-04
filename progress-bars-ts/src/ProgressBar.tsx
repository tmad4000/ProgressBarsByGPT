import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import './ProgressBar.css';


export type ProgressBarData = [string, number, ProgressBarData[]];


interface ProgressBarProps {
  data: ProgressBarData;
  level?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ data, level = 0 }) => {
  const [label, percentage, children] = data;
  const [open, setOpen] = useState(level === 0);  // set initial state based on level

  return (
    <div className="mb-3 pl-3" style={{ marginLeft: `${level * 20}px` }}>
      <div className="d-flex align-items-center">
        <div
          className="mr-3 label"
          style={{ cursor: "pointer" }}
          onClick={() => setOpen(!open)}
        >
          {label} {children.length > 0 && <span className={open ? "caret-down" : "caret-right"} />}
        </div>
        <div className="progress custom-progress" style={{ flexGrow: "1" }}>
          <div
            className="progress-bar progress-bar-striped custom-bar"
            role="progressbar"
            style={{ width: `${percentage}%` }}
          >
            {percentage}%
          </div>
        </div>
      </div>
      <Collapse in={open}>
        <div>
          {children.map((child, i) => (
            <ProgressBar key={i} data={child} level={level + 1} />
          ))}
        </div>
      </Collapse>
    </div>
  );
};

export default ProgressBar;
