import React from "react";
import styles from "@/styles/About.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.about_us}>
      <div className={styles.left__aboutus}>
       

        <img src="/aboutus.jpg" alt=""  className={styles.abt__img}/>
      </div>
      <div className={styles.right__aboutus}>
        <h1 className="about__heading">About us</h1>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
          debitis inventore! Rerum pariatur numquam necessitatibus illo
          repellendus esse consectetur eum! Possimus nam fugiat veritatis
          repudiandae, tenetur similique id rerum mollitia porro deleniti quo
          consequatur nulla. Quisquam necessitatibus ex aliquam ut quibusdam!
          Similique exercitationem tenetur autem repudiandae? Qui exercitationem
          quaerat ea, architecto earum adipisci, quasi cumque cupiditate minima
          nostrum explicabo!
        </p>

        <div>

        </div>
      </div>
    </div>
  );
};

export default About;
