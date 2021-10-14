import React from "react";

interface UIBoneProps {
  ref: React.RefObject<HTMLButtonElement>;
}

export default function UIBone({ ref }: UIBoneProps) {
  function reset(e: React.MouseEvent) {
    e.stopPropagation();
    e.preventDefault();
  }

  // UI - Interaction
  function onMouseUp(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    reset(e);
    const button = ref.current;
    // console.log("onMouseUp", e);
    if (button) {
    }
  }
  function onMouseMove(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    reset(e);
    const button = ref.current;
    // console.log("onMouseMove", e);
    if (button) {
    }
  }
  function onMouseDown(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    reset(e);
    const button = ref.current;
    // console.log("onMouseDown", e);
    if (button) {
    }
  }
  function onMouseOver(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    reset(e);
    const button = ref.current;
    // console.log("onMouseOver", e);
    if (button) {
    }
  }

  return {
    onMouseUp,
    onMouseMove,
    onMouseDown,
    onMouseOver
  };
}
