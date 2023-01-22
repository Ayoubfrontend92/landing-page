

import {Routes, Route} from "react-router-dom"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import LandingPage from "./components/LandingPage"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import SocialLinks from "./components/SocialLinks"


function App() {

  return (
    <div>
        <Navbar/>
        <Hero/>
      <SocialLinks/>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/products" element={<Products/>}/>
        </Routes>
        <Footer/>
 
         
    
    </div>
  )
}

export default App
