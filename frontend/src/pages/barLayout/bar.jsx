import React from 'react'
import Hero from '../homelayout/hero'

const Bar = () => {
  return (
    <div>
      <Hero
        heading="Bar"
        subheading={<>From gourmet plates to craft cocktails, we serve up the <br/>perfect mix of bold taste and good vibes.</>}
        backgroundImage="images/barHero-Img.png" 
        showOrderButton={false}
        fullHeight={false} 
      />
    </div>
  )
}

export default Bar