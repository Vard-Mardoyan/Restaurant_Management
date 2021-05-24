import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from "./components/Nav";
import { Routes } from "./helper/routes";

export default function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {Routes.map(({route, component: Component}, index) => (
            <Route exact  path={route} key={index} >
              <Component />
            </Route>
          ))}
          <Route path='*'>
            <h2>Not Found</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}