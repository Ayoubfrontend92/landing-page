

import {Routes, Route} from "react-router-dom"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import LandingPage from "./components/LandingPage"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div>
        <Navbar/>
        <Hero/>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
 
         
    
    </div>
  )
}

export default App
