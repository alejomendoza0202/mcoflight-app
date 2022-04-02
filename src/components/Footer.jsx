import React from 'react'
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footer_container}>
            <div className={styles.logo_footer}>
                <img src="/imgs/logo_full_no_background.png" alt="" className={styles.logo_image_footer} />
            </div>
            <div className={styles.contact_footer}>
                <h2 className={styles.contact_title}>
                    Contact Information
                </h2>
                <ul className={styles.list_contact}>
                    <li className={styles.list_item}>
                        Address
                    </li>
                    <li className={styles.list_item}>
                        City - State
                    </li>
                    <li className={styles.list_item}>
                        Phone Number
                    </li>
                    <li className={styles.list_item}>
                        E-mail
                    </li>
                </ul>
            </div>
            <div className={styles.social_footer}>
                <h2 className={styles.contact_follow_us}>
                    Follow Us
                </h2>
                <div className={styles.container_social_media_logos}>
                    <img src="/imgs/instagram_logo.png" alt="" className={styles.instagram_logo_footer} />
                    <img src="/imgs/facebook_logo.png" alt="" className={styles.facebook_logo_footer} />
                
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer