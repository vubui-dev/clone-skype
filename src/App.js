import { useUserContext } from "contexts/useUserContext";
import { Dashboard } from "pages/Dashboard/Dashboard";
import { LoginPage } from "pages/LoginPage/LoginPage";
import { SingUpPage } from "pages/SignUpPage/SingUpPage";
import React from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";

function App() {
  const { recentUser } = useUserContext();

  return (
    <Router>
      {recentUser && <Redirect to="/dashboard" />}
      <div className="App">
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SingUpPage} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
