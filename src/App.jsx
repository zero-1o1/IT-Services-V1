import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./pages/1.About/About"
import ContactUs from "./pages/4.ContactUs/ContactUs"
import Footer from "./components/Footer"
import Hero from "./components/hero"
import Navbar from "./components/Navbar"
import Portfolio from "./pages/2.Portfolio/Portfolio"
import Reviews from "./components/Reviews"
import Services from "./pages/1.About/About"

const App = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      <Router>
         <Navbar />


         <Routes>
           <Route exact path='/' element={<Hero />} />
           <Route path='/Services' element={<Services />} />
           <Route path='/About' element={<About />} />
           <Route path='/Portfolio' element={<Portfolio />} />
           <Route path='/ContactUs' element={<ContactUs />} />
         

         </Routes>
         {location.pathname === "/" && <Reviews />}
         <Footer />
      </Router>
    </main>
    
  )
}

export default App