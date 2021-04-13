import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//Bring in pages
import HomePage from "./components/pages/HomePage";

//Bring in state
import FormState from "./context/form/FormState";

function App() {
  return (
    <FormState>
      <Router>
        <div className="App">
          <Switch>
            <Route
              exact
              path={"/"}
              render={(props) => <HomePage {...props} />}
            />
          </Switch>
        </div>
      </Router>
    </FormState>
  );
}

export default App;
