import React from "react";
import styles from "./banner.module.css";
import test from "../resources/banner/test.png";
import viking from "../resources/banner/viking.png";
import imageThree from "../resources/banner/image 3.png";
import classNames from "classnames";

const Banner = () => {
  const firstClass = classNames(styles.bannerCard, styles.firstBanner);
  return (
    <div className={styles.bannerDiv}>
      <div className={styles.innerBanner}>
        <div className={styles.firstCard}>
          <div className={styles.CardImg}>
            <img src={viking} />
          </div>
          <div className={styles.CardContent}>
            <div className={styles.cardTitle}>Title</div>
            <div className={styles.cardDesc}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
            <button>Now Read</button>
          </div>
        </div>
        <div className={styles.secondCard}>
          <div className={styles.CardImg}>
            <img src={test} />
          </div>
          <div className={styles.CardContent}>
            <div className={styles.cardTitle}>Title</div>
            <div className={styles.cardDesc}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
            <button>Now Read</button>
          </div>
        </div>
        <div className={styles.thirdCard}>
          <div className={styles.CardImg}>
            <img src={imageThree} />
          </div>
          <div className={styles.CardContent}>
            <div className={styles.cardTitle}>Title</div>
            <div className={styles.cardDesc}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
            <button>Now Read</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
