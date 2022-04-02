import React from "react";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <section className={styles.services} id ="services">
      <h2 className={styles.title_services}> Services </h2>
      <div className={styles.container_services}>
        <div className={styles.card_service}>
          <div className={styles.top_card}>
            <h3 className={styles.service_name}>Service Name #1</h3>
          </div>
          <div className={styles.bottom_card}>
            <h4 className={styles.price_service}>$X</h4>
            <button className={styles.services_book_btn}>Book Now</button>
            <ul className={styles.services_list}>
              <li className={styles.items_list}>Item 1</li>
              <li className={styles.items_list}>Item 2</li>
              <li className={styles.items_list}>Item 3</li>
            </ul>
          </div>
        </div>
        <div className={styles.card_service}>
          <div className={styles.top_service}>
            <p className={styles.card_popular}> Popular </p>
          </div>
          <div className={styles.top_card}>
            <h3 className={styles.service_name}>Service Name #2</h3>
          </div>
          <div className={styles.bottom_card}>
            <h4 className={styles.price_service}>$X</h4>
            <button className={styles.services_book_btn}>Book Now</button>
            <ul className={styles.services_list}>
              <li className={styles.items_list}>Item 1</li>
              <li className={styles.items_list}>Item 2</li>
              <li className={styles.items_list}>Item 3</li>
            </ul>
          </div>
        </div>
        <div className={styles.card_service}>
          <div className={styles.top_card}>
            <h3 className={styles.service_name}>Service Name #3</h3>
          </div>
          <div className={styles.bottom_card}>
            <h4 className={styles.price_service}>$X</h4>
            <button className={styles.services_book_btn}>Book Now</button>
            <ul className={styles.services_list}>
              <li className={styles.items_list}>Item 1</li>
              <li className={styles.items_list}>Item 2</li>
              <li className={styles.items_list}>Item 3</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
