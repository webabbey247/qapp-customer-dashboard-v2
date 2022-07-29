import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Import Components
import Homepage from "./pages/Sitemaps/Homepage";
import SignUp from "./pages/Auth/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import TransactionHistory from "./pages/Dashboard/TransactionHistory";
import Transfer from "./pages/Dashboard/Transfer";
import TopUp from "./pages/Dashboard/TopUp";
import Utility from "./pages/Dashboard/Utility";

//Import styles
import "./assets/styles/App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/auth/sign-up' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/transactions-history' element={<TransactionHistory />} />
        <Route path='/dashboard/transfer' element={<Transfer />} />
        <Route path='/dashboard/top-up' element={<TopUp />} />
        <Route path='/dashboard/utility' element={<Utility />} />
      </Routes>
    </Router>
  );
}

export default App;
