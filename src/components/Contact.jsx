import React from 'react'
import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <section className={styles.contact_us} id="contactus">
        <div className={styles.form_container}>
            <h1 className={styles.contact_us_title}>
                Contact Us
            </h1>
            <input type="text" className={styles.input_name} placeholder = "Name" />
            <input type="number" className={styles.input_phone} placeholder = "Phone Number" />
            <textarea name="" id="" cols="30" rows="10" placeholder='Message' className={styles.input_message}></textarea>
            <button className={styles.btn_upload}>
                Send
            </button>
        </div>
        <div className={styles.container_image}>
            <img src="/imgs/ride_taxi.png" alt="person taking a taxi" className={styles.image_person_taxi} />
        </div>
    </section>
  )
}

export default Contact