import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import ProjectApi from '../Api/ProjectApi'

const Singleproject = () => {
  return (
    <>
      <Navbar />
      <section className='single-section'>
        <div className='row'>
            <div className='col-12 col-lg-6 '>
            <h1 className='project-headingone'>{ProjectApi[0].title}</h1>
            <p className='single-paraone'>{ProjectApi[0].info}</p>
            <button className='project-button'>Buy Now $99 </button>
            <button className='project-button'>Live Demo</button>
            </div>

            <div className='col-12 col-lg-6 justify-content-center '>
                <div className='row'>
                <div className='col-11 col-lg-6'>
                <img src={ProjectApi[0].img} alt="photos" className='single-imgone' />
                </div>
                </div>
            </div>    

        </div>  
        </section>

        <section className='single-sectiontwo'> 
        <div className='single-container'>
          <p className='single-para'><b className='bold'>Digital agencies </b> are strategicand creative marketing agencies focused on user experience, mobile, social, data gathering and analytics.</p>
          <h1 className='single-heading'>What is digital marketing ?</h1>
          <p className='single-para'>Digital marketing is the act of promoting and selling products and services by leveraging online marketing tactics such as social media marketing, search marketing, and email marketing.
          <br/>
          But in many ways, digital marketing is no different than traditional marketing. In both, smart organizations seek to develop mutually beneficial relationships with prospects, leads, and customers.
        </p>
          <img src="../images/digi.png" alt="hh" className='digi-img' />
          <p className='single-para'>Now, think about the last important purchase you made. Perhaps you purchased a home, hired someone to fix your roof, or changed paper suppliers at your office.</p>
          <p className='single-para'>Digital marketing is the act of promoting and selling products and services by leveraging online marketing tactics such as social media marketing, search marketing, and email marketing.</p>
        </div>  

        </section>

        <Footer />
    </>
  )
}

export default Singleproject