import React from 'react'
import Hero from './hero'
import About from './about'
import GetReady from './getReady'
import DietFeeding from './dietFeeding'
import HowToOrder from './howToOrder'
import HealthyChoice from './healthyChoice'

const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <GetReady/>
        <DietFeeding/>
        <HowToOrder/>
        <HealthyChoice/>
    </div>
  )
}

export default Home
