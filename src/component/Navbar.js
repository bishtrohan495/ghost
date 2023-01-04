import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <section>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" href="/">  <img className='nav-img' src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sb3JmdWwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="img" /> GHOST</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ma-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/projects">Projects</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/team">Team</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/stories">Stories</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/service">Service</NavLink>
        </li>
       
      </ul>
      <form className="d-flex ms-auto" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success btn-style" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</section>
    </>
  )
}

export default Navbar