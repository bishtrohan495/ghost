import React, { useState } from 'react'
import ServiceApi from '../Api/ServiceApi'

const Service = () => {
    const [servicedata, setservicedata] = useState(ServiceApi);
    return (
        <>
            <section className='service'>
                <div>
                    <p className='service-para'>FIND OUT MORE</p>
                </div>
                <div><h1 className='service-heading'>What we can do for your business <br /> and your projects</h1></div>
                <div className='row'>
                    {servicedata.map((cur) => {
                        const {id, img, title , info} = cur;
                        return (
                            <>
                                <div className='col-12 col-lg-3 service-container mt-5' key={id}>
                                    <img src={img} alt="img" className='img-fluid service-img'/>
                                    <h2 className='service-title mt-3'>{title}</h2>
                                    <p className='service-parag mt-2'>{info}</p>
                                </div>
                            </>);
                    })}
                </div>

                <div>
                    <h1 className='service-headingg'>Trusted by 2K customers and teams around the world</h1>
                </div>
                <div className='service-logo-container'>
                    <img src="../images/ghost.png" alt="img" className='service-logo' />
                    <img src="../images/git.png" alt="img" className='service-logo' />
                    <img src="../images/java.png" alt="img" className='service-logo' />
                    <img src="../images/node.png" alt="img" className='service-logo' />
                </div>
            </section>
        </>
    )
}

export default Service
