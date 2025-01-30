import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/Bestseller'
import OurPolicy from '../components/OurPolicy'

function Home() {
  return (
    <div>
      <Hero/> 
      <LatestCollection/> 
      <BestSeller/> 
      <OurPolicy/>
    </div>
  )
}

export default Home