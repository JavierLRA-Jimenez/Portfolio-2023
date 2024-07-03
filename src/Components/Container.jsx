import React from 'react'
import Navbar from './navbar'
import Hero from './hero'
import Techno from './techno'
import Proyect from './proyect'
import About from './aboutme'
import MaxWidthWrapper from './MaxWidthWrapper'
import Certifications from './certifications'
import Footer from './footer'


const Container = () => {
  return (
    <section className=''>
    <Navbar/>
    <MaxWidthWrapper className="bg-zinc-50">
      <Hero/>
      <About/>
      <Techno/>
      <Proyect/>
      <Certifications/>
    </MaxWidthWrapper>
    <Footer/>
   </section>
  )
}

export default Container