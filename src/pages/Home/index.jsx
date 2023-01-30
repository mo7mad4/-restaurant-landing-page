import React from 'react'
import SpaceBg from '../../components/SpaceBg'
import AboutUs from '../../sections/AboutUs'
import Header from '../../sections/Header'
import Special from '../../sections/Special'

const Home = () => {
  return (
    <div>
      <Header />
      <SpaceBg>
        <AboutUs />
        <Special />
      </SpaceBg>
    </div>
  )
}

export default Home
