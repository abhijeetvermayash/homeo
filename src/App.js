import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";

import Home from "./Home";
import List from "./List";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/today" exact component={List} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
