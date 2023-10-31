import React from "react";

function Achievement({ time, body, color, timeToLeft }) {
  return timeToLeft ? (
    <div className="achievement">
      <div className="achievement-body">{body}</div>
      <div className="achievement-divider">
        <div
          className="achievement-circle"
          style={{ backgroundColor: color }}
        ></div>
      </div>
      <div
        className="achievement-time"
        style={{
          textAlign: timeToLeft ? "left" : "right",
        }}
      >
        {time}
      </div>
    </div>
  ) : (
    <div className="achievement">
      <div
        className="achievement-time"
        style={{
          textAlign: timeToLeft ? "left" : "right",
        }}
      >
        {time}
      </div>

      <div className="achievement-divider">
        <div
          className="achievement-circle"
          style={{
            backgroundColor: color,
          }}
        ></div>
      </div>
      <div className="achievement-body">{body}</div>
    </div>
  );
}

export default Achievement;
