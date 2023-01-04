import React from 'react'
import { NavLink } from 'react-router-dom';

const Stories = () => {
    return (
        <>
            <section className='stories'>
                <p className='service-para'>CHECK NOW</p>
                <h1 className='service-heading'>Discover our latest stories, Tutorials <br /> and How to learning posts</h1>

                <div className='row'>
                                <div className='col-12 col-lg-4 stories-container mt-5' >
                                <NavLink to='/singlestory'>
                                    <img src="../images/555.jpg" alt="img" className='img-fluid stories-img' />
                                </NavLink>     
                                    <h4 className='stories-heading'>"Are you a “team of learners,” or do you learn as a team?"</h4>
                                    <p className='stories-para'>"These motivational stories prove that with a little hard work, any amount of business success is"</p>   
                                <NavLink to='/singlestory'>
                                <button className='visit-button'>Visit</button></NavLink>  
                                </div>

                                <div className='col-12 col-lg-4 stories-container mt-5' >
                                <NavLink to='/singlestory1'>
                                    <img src="../images/img2.jpg" alt="img" className='img-fluid stories-img' />
                                </NavLink>     
                                    <h4 className='stories-heading'>"What is the difference between designing & developing"</h4>
                                    <p className='stories-para'>"These motivational stories prove that with a little hard work, any amount of business success is"</p>   
                                <NavLink to='/singlestory1'>
                                <button className='visit-button'>Visit</button></NavLink>  
                                </div>

                                <div className='col-12 col-lg-4 stories-container mt-5' >
                                <NavLink to='/singlestory2'>
                                    <img src="../images/2.jpg" alt="img" className='img-fluid stories-img' />
                                </NavLink>     
                                    <h4 className='stories-heading'>"so, you should bringing your cat to work ?"</h4>
                                    <p className='stories-para'>"These motivational stories prove that with a little hard work, any amount of business success is"</p>   
                                <NavLink to='/singlestory2'>
                                <button className='visit-button'>Visit</button></NavLink>  
                                </div>
                </div>

            </section>
        </>
    )
}

export default Stories
