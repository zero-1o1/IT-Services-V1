import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import About from "./pages/1.About/About";
import ContactUs from "./pages/4.ContactUs/ContactUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./pages/2.Portfolio/Portfolio";
import Reviews from "./components/Reviews";
import Services from "./pages/3.Services/Services";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading only for the homepage
  useEffect(() => {
    if (window.location.pathname === "/") {
      const timer = setTimeout(() => setLoading(false), 3000); // Adjust time to match animation length
      return () => clearTimeout(timer); // Cleanup timer
    } else {
      setLoading(false); // No loading screen for other routes
    }
  }, []);

  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Hero />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/About" element={<About />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/ContactUs" element={<ContactUs />} />
          </Routes>
          {window.location.pathname === "/" && <Reviews />}
          <Footer />
        </Router>
      )}
    </main>
  );
};

export default App;
