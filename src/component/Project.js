import React from 'react'
import { NavLink } from 'react-router-dom';

const Project = () => {
    return (
        <>
            <section className='project'>
                <p className='service-para'>OUR RECENT PROJECT</p>
                <h1 className='service-heading'>We build successful, lasting,<br /> profitable projects </h1>

                <div className='row'>
                                <div className='col-12 col-lg-4 project-container mt-5' >
                                <NavLink to='/singleproject'>
                                    <img src="../images/22.png" alt="img" className='img-fluid stories-img' />
                                </NavLink>     
                                    <h4 className='stories-heading'>"Branding a Music & Podcast App"</h4>
                                    <p className='stories-para'>"Digital agencies are strategic and creative marketing agencies focused on user experience..."</p>   
                                <NavLink to='/singleproject'>
                                <button className='visit-button'>Visit</button>
                                </NavLink>  
                                </div>

                                <div className='col-12 col-lg-4 project-container mt-5' >
                                <NavLink to='/singleproject1'>
                                    <img src="../images/2.jpg" alt="img" className='img-fluid stories-img' />
                                </NavLink>     
                                    <h4 className='stories-heading'>"Branding: logo design, visual identity"</h4>
                                    <p className='stories-para'>"Digital agencies are strategic and creative marketing agencies focused on user experience..."</p>   
                                <NavLink to='/singleproject1'>
                                <button className='visit-button'>Visit</button>
                                </NavLink>  
                                </div>

                                <div className='col-12 col-lg-4 project-container mt-5' >
                                <NavLink to='/singleproject2'>
                                    <img src="../images/12.webp" alt="img" className='img-fluid stories-img' />
                                </NavLink>     
                                    <h4 className='stories-heading'>"Agincio A Design Agency Website",</h4>
                                    <p className='stories-para'>"Digital agencies are strategic and creative marketing agencies focused on user experience..."</p>   
                                <NavLink to='/singleproject2'>
                                <button className='visit-button'>Visit</button>
                                </NavLink>  
                                </div>

                </div>

            </section>
        </>
    )
}

export default Project