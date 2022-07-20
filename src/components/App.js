import React from "react";
import NavBar from "./NavBar"
import Home from "./Home"
import About from "./About"
import { username, city } from "../data/user"


function App() {
  return (
    <div>
      <NavBar />
      <Home usr={ username } cty={ city }/> {/* this is how you pass parameters to a component*/}
      <About />
    </div>
  );
}

export default App;
