import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import Profile from '../../assets/images/profile.jpg'


const Header=(props)=>{

  return (
    <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
    <div className="navbar-brand-wrapper d-flex justify-content-center">
      <div className="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">
        <Link className="navbar-brand brand-logo"
          to="/dahboard">
          <p class="logo-text"><img className="logoset" src={logo} alt="logo" /></p></Link>
      </div>
    </div>
    <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
      <ul className="navbar-nav mr-lg-4 w-100">
        <li className="nav-item nav-search d-none d-lg-block w-100">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search for stock market..." aria-label="search" aria-describedby="search" />
            <div className="input-group-prepend">
              <span className="input-group-text" id="search">
                <i class="fa fa-search" />

              </span>
            </div>
          </div>
        </li>
      </ul>
      <ul className="navbar-nav navbar-nav-right">

        <li className="nav-item dropdown me-1">
          <div className="d-flex flex-column justify-content-around">
            <div className="dropdown">
              <a className="btn btn-secondary dropdown-toggle p-0 bg-transparent border-0 text-dark shadow-none font-weight-medium" href="#" role="button" id="dropdownMenuLinkA" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <h5 className="mb-0 d-inline-block">Saturday, 20 October, 2021</h5>
                <i class="fa fa-calendar" />
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLinkA">
                <a className="dropdown-item" href="#">12 Aug 2018</a>
                <a className="dropdown-item" href="#">22 Sep 2018</a>
                <a className="dropdown-item" href="#">21 Oct 2018</a>
              </div>
            </div>
          </div>
        </li>

        <li className="nav-item nav-profile dropdown">
          <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" id="profileDropdown">
            <img src={Profile} alt="profile" />
            <span className="nav-profile-name">Seenam Khan</span>
            <i class="fa fa-angle-down" />
          </a>
          <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
            <a className="dropdown-item">
              <i className="mdi mdi-settings text-primary"></i>
              Settings
            </a>
            <a className="dropdown-item">
              <i className="mdi mdi-logout text-primary"></i>
              Logout
            </a>
          </div>
        </li>
      </ul> 
    </div>
  </nav>
  )
}

export default Header