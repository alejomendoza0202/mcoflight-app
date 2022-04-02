import React from 'react'
import styles from "./Sidebar.module.css"
import {FaTimes} from "react-icons/fa"
import {Link} from 'react-scroll'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <>
      <div className= { !isOpen ? styles.container_sidebar_opened : styles.container_sidebar_closed} onClick = {toggle}>
        <div className={styles.container_icon_close} onClick = {toggle}>
          <FaTimes className={styles.iconclose}></FaTimes>
        </div>
        <div className={styles.container_menu}>
          <ul className={styles.mobile_menu}>
            <li className={styles.items_menu} >
              <Link to="about" spy = {true} smooth= {true} duration = {500} offset = {-60} className={styles.link_items_menu} onClick = {toggle} > About </Link>
            </li>
            <li className={styles.items_menu} >
              <Link to="services"  spy = {true} smooth= {true} duration = {500} offset = {-60} className={styles.link_items_menu} onClick = {toggle}> Services </Link>
            </li>
            <li className={styles.items_menu} >
              <Link to="contactus" spy = {true} smooth= {true} duration = {500} offset = {-60} className={styles.link_items_menu} onClick = {toggle}> Contact Us </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar