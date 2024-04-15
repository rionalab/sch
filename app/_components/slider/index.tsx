import React from "react";
import { Carousel } from "antd";
import styles from "./styles.module.scss";
import Image from "next/image";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};

export function Slider() {
  return (
    <div className={styles.container}>
      <Carousel>
        <div className={styles.imgContainer}>
          <Image
            alt="1"
            width={1389}
            height={273}
            className={styles.img}
            quality={100}
            src={"/images/banner1.png"}
          />
        </div>
        <div className={styles.imgContainer}>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div className={styles.imgContainer}>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div className={styles.imgContainer}>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  );
}
