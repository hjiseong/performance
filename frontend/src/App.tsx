import "./theme/index.scss";
import React, { ReactElement } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import dotenv from "dotenv";
import Landing from "@pages/Landing";

dotenv.config();

export default function App(): ReactElement {
  return (
    <BrowserRouter basename="performance">
      <Route path="/" component={Landing} />
    </BrowserRouter>
  );
}
