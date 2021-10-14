import React, { ReactElement, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import UIBone from "./ui-bone";
import { animation, keyframes } from "./ui-interaction";
import UXBone from "./ux-bone";

const Button = styled.button<{
  condition: "normal" | "disabled" | "complete" | "loading";
}>`
  /* Keyframes */
  ${keyframes}

  /* Default Style */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: none;
  padding: 0.8em 1.5em;
  cursor: pointer;
  background-color: #fff;

  /* Condition Style */
  ${({ condition }) => {
    if (condition === "disabled") {
      return css``;
    } else if (condition === "complete") {
      return css``;
    } else if (condition === "loading") {
      return css``;
    } else {
      // normal
      return css`
        &:hover {
          background-color: #eee;
          ${animation.hover_normal}
        }
      `;
    }
  }}
`;

interface ButtonProps {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  whenIsClickable?: boolean;
  whenIsDisabled?: boolean;
  whenIsComplete?: boolean;
  whenIsLoading?: boolean;
}

export default function index({
  text = "Button",
  onClick,
  whenIsDisabled = false,
  whenIsComplete = false,
  whenIsLoading = false
}: ButtonProps): ReactElement {
  const ref = useRef<HTMLButtonElement>(null);
  const { condition, normal, disabled, complete, loading } = UXBone({ ref });
  const { onMouseUp, onMouseMove, onMouseDown, onMouseOver } = UIBone({ ref });

  useEffect(() => {
    if (whenIsDisabled) {
      disabled();
    } else if (whenIsComplete) {
      complete();
    } else if (whenIsLoading) {
      loading();
    } else {
      normal();
    }
  }, [whenIsDisabled, whenIsComplete, whenIsLoading]);

  return (
    <Button
      ref={ref}
      condition={condition}
      onClick={onClick}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onMouseDown={onMouseDown}
      onMouseOver={onMouseOver}
    >
      {text}
    </Button>
  );
}
