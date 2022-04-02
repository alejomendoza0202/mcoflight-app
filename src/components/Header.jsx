import React from "react";
import styles from "./Header.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container_info}>
        <div className={styles.car_image_container}>
          <img
            src="/imgs/taxi_header.png"
            alt="taxi_image"
            className={styles.car_image}
          />
        </div>
        <div className={styles.about_info_container}>
          <h1 className={styles.main_title_header}>Main Title</h1>
          <p className={styles.info_header}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
            cumque laudantium quidem in, necessitatibus nemo vel. Sint, quaerat!
            Nulla ab consequatur aspernatur accusantium exercitationem numquam
            molestiae delectus amet perferendis suscipit?
          </p>
          <div className={styles.container_btn}>
            <button className={styles.btn_book}>Book Now</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
