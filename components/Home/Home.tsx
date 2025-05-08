"use client"
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import Destination from './Destination/Destination'
import Hotel from './Hotel/Hotel'
import WhyChoose from './WhyChoose/WhyChoose'
import Review from './Reviews/Reviews'
import News from './News/News'

import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {

  
useEffect(()=>{
  const initAOS = async()=>{
    await import("aos")
     AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom"

  })
}
initAOS();
}, [])


  return (
    <div>
        <Hero />
        {/* <Services /> */}
        <Destination />
        <Hotel />
        <WhyChoose />
        <Review />
        <News />
    </div>
  )
}

export default HomePage