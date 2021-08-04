import React, { ReactElement } from "react";
import { Route, HashRouter } from "react-router-dom";
import dotenv from "dotenv";
dotenv.config();

const repository = "template-react";

export default function App(): ReactElement {
  return (
    <HashRouter basename={repository}>
      <Route exact path="/" component={() => <>Home</>} />
      <Route path="/login" component={() => <>Login</>} />
    </HashRouter>
  );
}
