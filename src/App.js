import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UnlockPage from "./UnlockPage";
import SuccessPage from "./SuccessPage";
import Tyas from "./Tyas";
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UnlockPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/tyas" element={<Tyas />}/>
      </Routes>
    </Router>
  );
};

export default App;
