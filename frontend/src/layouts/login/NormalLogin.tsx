import "./NormalLogin.scss";
import { User } from "@src/types";
import React, { ReactElement } from "react";

interface Props {
  user: User;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function NormalLogin({ user, onChange }: Props): ReactElement {
  return (
    <div>
      <div>
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          id="email"
          className="input"
          type="text"
          placeholder="Email"
          value={user?.email}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          id="password"
          className="input"
          type="password"
          placeholder="Password"
          value={user?.password}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
