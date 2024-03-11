import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Bitcoin from "./component/Bitcoin";
import NavBar from "./component/NavBar";

function App() {
  return (
    <div className="bg-light min-vh-100">
      <Router>
        <NavBar />
       
        <div className="container">
          <Routes>
            <Route path="/" element={<Bitcoin/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
