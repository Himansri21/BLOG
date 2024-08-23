import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomepageComp from "./pages /homepage";
import UnderstandingLuck from "./posts/UnderstandingLuck-luck-22-8-24";
import LuckArticle from "./posts/Luck-22-8-24"; // Adjust path as needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomepageComp />} />
        <Route path="/luck" element={<LuckArticle />} />
        <Route path="/understanding-luck" element={<UnderstandingLuck />} />
      </Routes>
    </Router>
  );
}

export default App;
