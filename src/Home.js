import React from 'react'
import Navbar from './component/Navbar'
import Header from './component/Header'
import Service from './component/Service'
import Team from './component/Team'
import Clients from './component/Clients'
import Footer from './component/Footer'
import Stories from './component/Stories'
import Project from './component/Project'

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Project />
      <Service />
      <Team />
      <Stories />
      <Clients />
      <Footer />
    </>
  )
}

export default Home