export type ProgressBarData = [string, number, ProgressBarData[]];

import React, { useState } from "react";
import { Collapse } from "react-bootstrap";

interface ProgressBarProps {
  data: ProgressBarData;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ data }) => {
  const [label, percentage, children] = data;
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-3 pl-3">
      <div className="d-flex align-items-center">
        <div
          className="mr-3"
          style={{ cursor: "pointer" }}
          onClick={() => setOpen(!open)}
        >
          {label} {children.length > 0 && (open ? '▼' : '►')}
        </div>
        <div className="progress" style={{ flexGrow: "1" }}>
          <div
            className="progress-bar progress-bar-striped"
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
            <ProgressBar key={i} data={child} />
          ))}
        </div>
      </Collapse>
    </div>
  );
};

export default ProgressBar;
