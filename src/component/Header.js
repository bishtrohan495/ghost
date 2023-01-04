import React from 'react'

const Header = () => {
  return (
    <>
     <header>
        <section className='container main-header'>
            <div className='row'>
            <div className='col-12 col-lg-6 left-side'>
                <h1 className='main-heading'>We develop brands and lunch websites for businesses</h1>
                <p className='main-para mt-5'>Discover the most outstanding projects from creative design, to develop amazing websites</p>
            </div>

            <div className='col-12 col-lg-6 right-side'>
                <div className='row'>
                <div className='col-11 col-lg-6'>
                <img src="../images/555.jpg" alt="photo" className='img-fluid img' />
                </div>

                <div className='col-11 col-lg-6'>
                <img src="../images/img2.jpg" alt="photo" className='img-fluid img' />
                </div>

                <div className='col-11 col-lg-6'>
                <img src="../images/12.webp" alt="photo" className='img-fluid img' />
                </div>

                <div className='col-11 col-lg-6'>
                <img src="../images/22.png" alt="photo" className='img-fluid img' />
                </div>
                </div>
            </div>

            </div>
        </section>
     </header>
    </>
  )
}

export default Header