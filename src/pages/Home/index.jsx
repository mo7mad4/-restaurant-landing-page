import React from 'react'
import SpaceBg from '../../components/SpaceBg'
import AboutUs from '../../sections/AboutUs'
import CookingIngredients from '../../sections/CookingIngredients'
import Discount from '../../sections/Discount'
import Header from '../../sections/Header'
import Kitchen from '../../sections/Kitchen'
import Special from '../../sections/Special'

const Home = () => {
  return (
    <div>
      <Header />
      <SpaceBg>
        <AboutUs />
        <Special />
        <Kitchen />
        <Discount />
        <CookingIngredients />
      </SpaceBg>
    </div>
  )
}

export default Home
