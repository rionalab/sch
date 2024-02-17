import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";

function Page() {
  return (
    <div className={styles.container}>
      <div>
        <Image
          width={1380}
          height={1380}
          className={styles.img1}
          alt="Dashboard"
          src={"/images/dashboard.avif"}
        />
      </div>
      <div>
        <Image
          width={359}
          height={137}
          className={styles.img2}
          alt="Dashboard"
          src={"/images/quote.png"}
        />
      </div>
    </div>
  );
}

export default Page;
