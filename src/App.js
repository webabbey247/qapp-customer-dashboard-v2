import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Import Components
import Homepage from "./pages/Sitemaps/Homepage";
import SignUp from "./pages/Auth/SignUp";

//Import styles
import "./assets/styles/App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/auth/sign-up' element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
