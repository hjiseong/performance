import Button from "@src/bone/button";
import React, { ReactElement } from "react";

export default function Bone(): ReactElement {
  return (
    <Button
      text="버튼"
      onClick={(e) => {
        console.log("Hello");
      }}
    />
  );
}
