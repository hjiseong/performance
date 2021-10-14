import "./theme/index.scss";
import React, { ReactElement } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import dotenv from "dotenv";
import Landing from "@pages/Landing";
import Bone from "./pages/Bone";

dotenv.config();

export default function App(): ReactElement {
  return (
    <BrowserRouter basename="performance">
      <Route exact path="/landing" component={Landing} />
      <Route exact path="/bone" component={Bone} />
    </BrowserRouter>
  );
}
