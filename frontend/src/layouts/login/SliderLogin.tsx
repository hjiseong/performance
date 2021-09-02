import "./SliderLogin.scss";
import { User } from "@src/types";
import React, { ReactElement } from "react";

interface Props {
  user: User;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SliderLogin({ user, onChange }: Props): ReactElement {
  return (
    <div>
      <input
        type="text"
        placeholder="Email"
        value={user?.email}
        onChange={onChange}
      />
      <input
        type="password"
        placeholder="Password"
        value={user?.password}
        onChange={onChange}
      />
    </div>
  );
}
