import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as Page from "./pages";
import { Layout } from "./components";
import "./App.css";
import "antd/dist/antd.css";

export const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
          <Route component={Page.Landing} />
      </Switch>
    </Layout>
  </BrowserRouter>
);
