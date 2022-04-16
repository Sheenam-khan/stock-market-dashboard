import React from 'react'
import { Link } from 'react-router-dom'
import Market from "../../assets/svg/analytics_black_24dp.svg"
import Dashboard from "../../assets/svg/dashboard_black_24dp.svg"
import News from "../../assets/svg/newspaper_black_24dp.svg"
import Portfolio from "../../assets/svg/person_black_24dp.svg"
import Setting from "../../assets/svg/settings_black_24dp.svg"

const routes = [
  {
    imgSrc: Market,
    url: '/market',
    name: 'Market'
  },
  {
    imgSrc: Dashboard,
    url: '/dashboard',
    name: 'Dashboard'
  },
  {
    imgSrc: News,
    url: '/news',
    name: 'News'
  },
  {
    imgSrc: Portfolio,
    url: '/portfolio',
    name: 'Portfolio'
  },
  {
    imgSrc: Setting,
    url: '/setting',
    name: 'Setting'
  }
]

const Sidebar = (props) => {
 

  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        {routes.map((item, index) =>
          <li key={index} className={item.url == "/dashboard" ? 'active nav-item' : 'nav-item'}>
            <Link className="nav-link" to={item.url}>
              <img src={item.imgSrc} alt="" class="btn" />
              <span className="menu-title">{item.name}</span>
            </Link>
          </li>
        )}

      </ul>
    </nav>
  )
}

export default Sidebar