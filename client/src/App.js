import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from "./utils/PrivateRoute";
import BubblePage from "./components/BubblePage";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to ="/">Login</Link>
          <Link to ="/bubblepage">View Colors</Link>
        </nav>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/bubblepage" component={BubblePage}/>
      </div>
    </Router>
  );
}

export default App;
