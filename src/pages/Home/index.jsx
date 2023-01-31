import React from 'react'
import SpaceBg from '../../components/SpaceBg'
import AboutUs from '../../sections/AboutUs'
import Blogs from '../../sections/Blogs'
import CookingIngredients from '../../sections/CookingIngredients'
import Count from '../../sections/Count'
import Discount from '../../sections/Discount'
import Header from '../../sections/Header'
import Kitchen from '../../sections/Kitchen'
import Review from '../../sections/Reviews'
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
        <Count />
        <Review />
        <Blogs />
      </SpaceBg>
    </div>
  )
}

export default Home
