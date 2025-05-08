import React from 'react'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import Destination from './Destination/Destination'
import Hotel from './Hotel/Hotel'
import WhyChoose from './WhyChoose/WhyChoose'
import Review from './Reviews/Reviews'
import News from './News/News'

const HomePage = () => {
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