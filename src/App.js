import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/Components/Home';
import RefundPolicy from "./Components/Refund/refundPolicy";
import PrivacyPolicy from "./Components/Privacy/privacy";
import FAQ from "./Components/FAQ/faq";
import TermsConditions from "./Components/Terms&Condition/terms";
import Scroll from "./Components/scroll/scroll";
// import HomeNav from "./Components/homeNav";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms&Condition" element={<TermsConditions />} />


          <Route path="/scroll" element={<Scroll />} />
          {/* <Route path="/nav" element={<HomeNav />} /> */}


        </Routes>
      </div>
    </Router>
  );
}

export default App;
