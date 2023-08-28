import React from "react";
import styles from "./Home.module.scss";
import Nav from "../Components/Nav";
import landingImg from "../Assets/landing-img.svg";
import { Link } from "react-router-dom";

export default function Home() {

  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.welcome}>
        <img src={landingImg} width={300} />
        <div className={styles.textWrap}>
          <h1 className={styles.heading}>TRANSLATE WITH EASE</h1>
          <p>Powered by Google Translator AI</p>
          <br />
          <p className={styles.text}>
            Get instant results and translate as accurate as possible with the
            use of iTranslate. The most powerful AI translator made possible
            with Google Translator AI technology
          </p>
        </div>
      </div>



      <Link to={'/translate'}><button className={styles.button}>
        Start Now
      </button>
      </Link>
    </div>
  );
}
