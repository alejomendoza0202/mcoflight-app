import React from 'react'

import {Link} from 'react-scroll'


import {FaBars} from 'react-icons/fa'
import "./Navbar.css"

const Navbar = ({toggle}) => {
  return (
    <div className="container_navbar">
        <div className="navbar">
            <div className="container_logo">
                <Link to = '/' className="navbar_link_logo">
                    <img src="/imgs/top_logo_no_background.png" alt="logo_mcofligth" className="logo_img" />
                </Link>
            </div>
            <ul className="menu_desktop">
                <li className="item_menu">
                    <Link to = 'about' spy = {true} smooth= {true} duration = {500} offset = {-60} className="link_menu"> About </Link>
                </li>
                <li className="item_menu">
                    <Link to = "services" spy = {true} smooth= {true} duration = {500} offset = {-60} className="link_menu"> Services </Link>
                </li>
                <li className="item_menu">
                    <Link to = "contactus" spy = {true} smooth= {true} duration = {500} offset = {-60} className="link_menu"> Contact Us </Link>
                </li>
            </ul>
            <div className="container_menu_mobile" onClick = {toggle}>
                <FaBars className='menu_mobile_icon' ></FaBars>
            </div>
        </div>
    </div>
  )
}

export default Navbar