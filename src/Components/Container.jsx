import React from 'react'
import Navbar from './navbar'
import Hero from './hero'
import Techno from './techno'
import Proyect from './proyect'
import About from './aboutme'
import MaxWidthWrapper from './MaxWidthWrapper'

const Container = () => {
  return (
    <section className=''>
    <Navbar/>
    <MaxWidthWrapper className="bg-zinc-50">
      <Hero/>
      <About/>
      <Techno/>
      <Proyect/>
    </MaxWidthWrapper>
   </section>
  )
}

export default Container