"use client";

import Image from "next/image";
import { useState } from "react";
import FormRegister from "./components/form-register/form";
import FormSignin from "./components/form-signin/form";
import styles from "./styles.module.scss";

function Page() {
  const [activeForm, setActiveForm] = useState<"signin" | "signup">("signin");
  const toggleForm = () => {
    setActiveForm((prev) => {
      return prev === "signin" ? "signup" : "signin";
    });
  };

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
          <div className={activeForm === "signup" ? "dNone" : ""}>
            <FormSignin activeForm={activeForm} />
            <p className={styles.register}>
              Dont have an account?{" "}
              <a onClick={toggleForm} href="#">
                Create Account
              </a>
            </p>
          </div>
          <div className={activeForm === "signin" ? "dNone" : ""}>
            <FormRegister toggleForm={toggleForm} activeForm={activeForm} />
            <p className={styles.register}>
              Already have an account?{" "}
              <a onClick={toggleForm} href="#">
                Sign in
              </a>
            </p>
          </div>
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
