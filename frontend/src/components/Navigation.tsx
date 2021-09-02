import React, { ReactElement } from "react";

interface Props {
  onClose: () => void;
}

export default function Navigation({ onClose }: Props): ReactElement {
  return (
    <div className="navigation">
      Navigation
      <button onClick={() => onClose()}>X</button>
    </div>
  );
}
