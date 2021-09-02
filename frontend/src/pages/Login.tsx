import NormalLogin from "@src/layouts/login/NormalLogin";
import SliderLogin from "@src/layouts/login/SliderLogin";
import { User } from "@src/types";
import React, { ReactElement, useEffect, useState } from "react";

export default function Login(): ReactElement {
  const [loginState, setLoginState] = useState<User>({ id: -1 });

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setLoginState({ ...loginState, [name]: value });
  }

  return (
    <section>
      <NormalLogin user={loginState} onChange={onChange} />
      {/* <SliderLogin user={loginState} onChange={onChange} /> */}
    </section>
  );
}
