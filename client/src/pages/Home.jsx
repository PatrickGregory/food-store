import React from 'react'
import Header from '../component/Header'
import RecommendedFood from '../component/RecommendedFood'
import Service from '../component/Service'
import NewFood from '../component/NewFood'
import ServiceTwo from '../component/ServiceTwo'
import SpecialFood from '../component/Specialfood'

function Home() {
  return (
    <div>
      <Header/>
      <RecommendedFood/>
      <Service/>
      <NewFood/>
      <ServiceTwo/>
      <SpecialFood/>
    </div>
  )
}

export default Home
