import React, { ReactElement } from "react";
import { useInView } from "react-intersection-observer";

export default function LandingHome(): ReactElement {
  // const { ref, inView, entry } = useInView();

  return (
    <div className="page-content">
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
      <div>
        <img src="../../../assets/video/storybook.mp4" alt="" />
      </div>
    </div>
  );
}
