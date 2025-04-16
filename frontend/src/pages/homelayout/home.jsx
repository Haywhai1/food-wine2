import React from 'react'
import Hero from './hero'
import About from './about'
import GetReady from './getReady'
import DietFeeding from './dietFeeding'
import HowToOrder from './howToOrder'
import HealthyChoice from './healthyChoice'
import Footer from '../../shared/footer'
import PopularDishes from './popularDishes'
import CustomerReview from './ourReview'


const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <PopularDishes/>
        <GetReady/>
        <DietFeeding/>
        <HowToOrder/>
        <HealthyChoice/>
        <CustomerReview/>
        <Footer/>
    </div>
  )
}

export default Home
