import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
//import Help from "./pages/Help";

const Routes = () => (
  <BrowserRouter>
    <React.Suspense fallback={<h1>carregando...</h1>}>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/add-book"><AddBook /></Route>
        <Route path="*">Página não encontrada</Route>
      </Switch>
    </React.Suspense>
  </BrowserRouter>
);

export default Routes;
