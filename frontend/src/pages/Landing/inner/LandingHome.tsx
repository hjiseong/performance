import React, { ReactElement } from "react";

export default function LandingHome(): ReactElement {
  return (
    <>
      <div className="title">
        <div className="word-1">
          <span>Pursue</span>
        </div>
        <div className="word-2">
          <span>efficiency.</span>
        </div>
        <div className="word-3">
          <span>
            <span className="circle"></span>Find an
          </span>
        </div>
        <div className="word-4">
          <span>easier way.</span>
        </div>
      </div>
      <div style={{ height: "300vh" }}></div>
    </>
  );
}
