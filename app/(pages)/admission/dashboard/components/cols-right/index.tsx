import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";
import { Avatar } from "antd";

function ColsRight() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image
          src="/images/news.png"
          quality={100}
          alt="1"
          width={145}
          height={83}
        />
        <span>NEWS</span>
      </div>
      <div className={styles.content}>
        {Array.from({ length: 4 }).map((row, i) => (
          <div key={i} className={styles.news}>
            <div className={styles.imgContainer}>
              <Image
                height={95}
                width={95}
                src={"/images/profile.png"}
                alt="avatar"
              />
            </div>
            <div>
              <span>News {i + 1}</span>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColsRight;
