import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UnlockPage from "./UnlockPage";
import SuccessPage from "./SuccessPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UnlockPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
};

export default App;
