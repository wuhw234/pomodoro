import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Main";
import Customize from "./Customize";
import Signup from "./Signup";
import Login from "./Login";
import Error from "./Error";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/customize">
            <Customize />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="*"><Error /></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
