import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WeatherContext from "../contexts/weather/context";
import WeatherContextProvider from "../contexts/weather/provider";
import Todo from "../pages/todo";
import Weather from "../pages/todo/weather";
interface Props {}

export const Routers = (props: Props) => {
  return (
    <div>
      <WeatherContextProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Todo />
            </Route>
            <Route path="/NotFound">
              <h1>404</h1>
            </Route>
            <Route path="/to-do-list">
              <Todo />
            </Route>
            <Route path="/weather">
              <Weather />
            </Route>
          </Switch>
        </Router>
      </WeatherContextProvider>
    </div>
  );
};
