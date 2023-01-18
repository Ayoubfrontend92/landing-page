import Container from "./components/Container"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import MiddleFirst from "./components/MiddleFirst"
import MiddleSecond from "./components/MiddleSecond"
import MiddleThird from "./components/MiddleThird"
import Navbar from "./components/Navbar"
import SocialLinks from "./components/SocialLinks"
import Sub from "./components/Sub"

function App() {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <SocialLinks/>
      <Container/>
      <MiddleFirst/>
      <MiddleSecond/>
      <MiddleThird/>
      <Sub/>
      <Footer/>
    </div>
  )
}

export default App
