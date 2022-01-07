import React from "react";
import "./style.css";

export default function Toggle({ toggled, onClick }) {
  return (
    <div>
      <div
        onClick={onClick}
        className={`toggle ${toggled ? "toggled-theater" : ""}`}
      >
        <div className="notch ">
          <div className="notch-txt-1">
            <span>{toggled ? "In Theaters" : "On Tv"}</span>
          </div>
        </div>
        <div className="notch-txt-2">
          <span>OnTV InTheaters</span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
