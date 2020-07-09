import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//Bring in pages
import HomePage from "./components/pages/HomePage";
import PdfPage from "./components/pages/PdfPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path={"/"} render={(props) => <HomePage {...props} />} />
          <Route
            exact
            path={"/pdf"}
            render={(props) => <PdfPage {...props} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
