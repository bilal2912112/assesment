import React from "react";
import Events from "./components/Events";
import Landing from "./components/Landing";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="Events" element={<Events />} />
      </Routes>
    </div>
  );
};

export default App;
