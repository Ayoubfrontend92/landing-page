import React from 'react'
import Container from "./Container"
import Footer from "./Footer"
import Hero from "./Hero"
import MiddleFirst from "./MiddleFirst"
import MiddleSecond from "./MiddleSecond"
import MiddleThird from "./MiddleThird"
import Navbar from "./Navbar"
import Sub from "./Sub"



const LandingPage = () => {
  return (
    <div>
      
      <Container/>
      <MiddleFirst/>
      <MiddleSecond/>
      <Sub/>
      <MiddleThird/>
    </div>
  )
}

export default LandingPage