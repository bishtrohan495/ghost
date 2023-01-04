import React from 'react'

const Clients = () => {
  return (
    <>
      <section className='client'>
        <div className='clients-section'>
            <div><h1 className='client-heading'>What's our clients say about our <br /> business and project </h1></div>
        </div>

            <div className='row'>
            <div className='col-12 col-lg-5 client-container mt-4'>
            <div className='client-subsub mt-4'>
                  <p className='client-para'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae velit laborum nisi explicabo autem voluptatibus, praesentium libero dignissimos fugiat reprehenderit nobis similique. </p>
                  <div className='client-subdiv d-flex'>
                    <img src="../images/women1.png" alt="img" className='img-fluid client-img' />
                    <div className='client-subsub'>
                        <h2>Miasaki Ume</h2>
                        <p>Founder of T-rex Themes</p>
                    </div>
                  </div>
                  </div>
            </div>

            <div className='col-12 col-lg-5 client-container mt-4'>
            <div className='client-subsub mt-4'>
                  <p className='client-para'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae velit laborum nisi explicabo autem voluptatibus, praesentium libero dignissimos fugiat reprehenderit nobis similique. </p>
                  <div className='client-subdiv d-flex'>
                    <img src="../images/men3.png" alt="img" className='img-fluid client-img' />
                    <div className='client-subsub'>
                        <h2>Wayne Tarry</h2>
                        <p>Co-Founder of Square Themes</p>
                    </div>
                  </div>
                  </div>
            </div>

          </div>            
      </section>
    </>
  )
}

export default Clients
