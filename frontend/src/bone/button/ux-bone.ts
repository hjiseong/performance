import { useState } from "react";

interface UXBoneProps {
  ref: React.RefObject<HTMLButtonElement>;
}

export default function UXBone({ ref }: UXBoneProps) {
  const [condition, setCondition] = useState<
    "normal" | "disabled" | "complete" | "loading"
  >("normal");

  return {
    condition,
    normal: () => setCondition("normal"),
    disabled: () => setCondition("disabled"),
    complete: () => setCondition("complete"),
    loading: () => setCondition("loading")
  };
}
