import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/home/Home";
import PrivateRoute from "./components/layout/PrivateRoute";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
