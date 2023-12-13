import React from 'react'
import Navbar from './navbar'
import Hero from './hero'
import Techno from './techno'
import Proyect from './proyect'
import About from './aboutme'
import Certification from './certifications'

const Container = () => {
  return (
    <section>
    <Navbar/>
    <Hero/>
    <About/>
    <Techno/>
    <Proyect/>
    <Certification/>
    </section>
  )
}

export default Container