import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.about_container}>
        <h2 className={styles.about_title}>About Us</h2>
        <p className={styles.about_p}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quis
          odio quos sunt recusandae quia consequuntur atque deserunt expedita,
          dolor aut vitae quas qui deleniti repellat velit iusto facilis labore.
          Odio unde non reprehenderit laudantium ipsa sunt repellendus cumque
          harum sit autem, recusandae corporis adipisci aperiam, nam eos
          asperiores nulla error magnam voluptate? Asperiores tenetur
          reprehenderit cupiditate, neque repellendus ut.
        </p>
        <p className={styles.about_p}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quis
          odio quos sunt recusandae quia consequuntur atque deserunt expedita,
          dolor aut vitae quas qui deleniti repellat velit iusto facilis labore.
          Odio unde non reprehenderit laudantium ipsa sunt repellendus cumque
          harum sit autem, recusandae corporis adipisci aperiam, nam eos
          asperiores nulla error magnam voluptate? Asperiores tenetur
          reprehenderit cupiditate, neque repellendus ut.
        </p>
      </div>
    </section>
  );
};

export default About;
