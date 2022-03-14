import React from 'react'
import Cards from '../components/Cards'
import Video from '../components/Video'
import '../App.css'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <React.Fragment>
      <Video />
      <Cards />
      <Footer />
    </React.Fragment>
  )
}

export default Home
