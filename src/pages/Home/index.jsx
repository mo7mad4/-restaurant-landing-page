import React from 'react'
import SpaceBg from '../../components/SpaceBg'
import AboutUs from '../../sections/AboutUs'
import Header from '../../sections/Header'

const Home = () => {
  return (
    <div>
      <Header />
      <SpaceBg>
        <AboutUs />
      </SpaceBg>
    </div>
  )
}

export default Home
