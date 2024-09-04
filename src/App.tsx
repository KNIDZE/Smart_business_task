import React from "react";
import Home from "./home/home";
import { Helmet } from "react-helmet";
function App() {
  return (
    <div className="App">
      <Helmet>
        <title>UserBoard</title>
      </Helmet>
      <Home />
    </div>
  );
}

export default App;
