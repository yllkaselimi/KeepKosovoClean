import React from 'react'
import CardsSection from '../components/CardsSection'
import HeroBanner from '../components/HeroBanner'
import MapSection from '../components/MapSection'

function Home() {
  return (
    <div>
      <HeroBanner />
      <MapSection />
      <CardsSection />
    </div>
  )
}

export default Home