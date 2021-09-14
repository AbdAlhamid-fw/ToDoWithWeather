import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Initial } from '../pages/initial';
import { Login } from '../pages/authentication/log-in';
interface Props {
    
}

export const Routers = (props: Props) => {
    return (
      <div>
        <Router>
          <div>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route exact path="/">
                <Login />
              </Route>
              <Route path="/Login">
                <Login />
              </Route>
              <Route path="/Initial">
                <Initial />
              </Route>
              <Route path="/NotFound">
                <h1>404</h1>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
}
