import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import FormSignin from "./components/form/form";

function Page() {
  return (
    <div className={styles.bg}>
      <div className={styles.box}>
        <div className={styles.colLeft}>
          <Image
            width={120}
            height={83}
            className={styles.logo}
            src="/images/logo2.png"
            alt="img login"
          />
          <FormSignin />
        </div>
        <div className={styles.colRight}>
          <Image
            width={250}
            height={250}
            src="/images/login-adm-right.png"
            alt="img login"
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
