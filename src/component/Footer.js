import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';

const Footer = () => {
  return (
    <>
        <footer className='footer-section'>
            <h1 className='service-heading mt-4'>Sign up to our newsletters</h1>
            <p className='service-para'>Subscribe now to get notified about excluive stories from the writing every week!</p>
            <div className='input-group mt-4'>
                <input type="text" className='form-control-text w-25 p-2 ' placeholder='EMAIL ADDRESS' />
                 <div className='input-group-text'>Subscribe</div>
            </div>
            <hr />
            <h2><img className='footer-img' src="../images/jpg1.jpg" alt="img" /> GHOST</h2>
            <p className='footer-para'>© ghost - design & developed by rohan bisht </p>
            <div className='footer-sub-div d-flex justify-content-center'>
                  <i className='footer-icon'><FacebookIcon /></i>
                  <i className='footer-icon'><TwitterIcon /></i>
                  <i className='footer-icon'><InstagramIcon /></i>
                  <i className='footer-icon'><EmailIcon /></i>
            </div>
        </footer>
    </>
  )
}

export default Footer
