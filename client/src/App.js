import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from "./utils/PrivateRoute";
import BubblePage from "./components/BubblePage";
import ColorList from "./components/ColorList";

function App() {
  const [colorList, setColorList] = useState([])

  const updateColor = updatedColor => {
    const updatedColors = colorList.map(colors => {
      if(colors.id === updatedColor.id){
        return updatedColor;
      }
      return colors;
    });
    setColorList(updatedColors);
  }
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to ="/">Login</Link>
          <Link to ="/bubblepage">View Colors</Link>
          <Link to ="/colorlist">Update Colors</Link>
        </nav>
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute exact path="/bubblepage" component={BubblePage}/>
        <PrivateRoute exact path="/colorlist" component={ColorList} />
      </div>
    </Router>
  );
}

export default App;
