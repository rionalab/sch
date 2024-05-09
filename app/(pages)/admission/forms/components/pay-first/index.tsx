"use client";

import { notifTryAgain } from "@/consts";
import { useAntdContext } from "@/contexts";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

function PayFirst() {
  const [id, setId] = useState(0);
  const { api } = useAntdContext();

  const handlePayment = async () => {
    try {
      // await allowRegister(id);
      window.location.reload();
    } catch (e) {
      api?.error(notifTryAgain());
    }
  };

  useEffect(() => {
    setId(Number(localStorage.getItem("auth")));
  });

  console.log(id);

  return (
    <div className={`${styles.container}  post `}>
      <br />
      <br />
      <h3>Secure Your Child&apos;s Spot Today!</h3>
      <br />
      <p>Dear Parents,</p>
      <p>
        We&apos;re excited to welcome your child to our program! Before you
        complete the registration process, please note that securing your
        child&apos;s spot requires payment. This ensures that we can reserve a
        place for your little one in our vibrant learning community.
      </p>
      <p>
        To proceed with payment and secure your child&apos;s enrollment, simply{" "}
        <a onClick={handlePayment} href="#">
          click here
        </a>{" "}
        or the button below. Once payment is received, your child&apos;s spot
        will be confirmed, and you can rest assured knowing they&apos;re all set
        to embark on an enriching educational journey with us.
      </p>

      <p>
        Thank you for choosing us to be part of your child&apos;s educational
        experience. Should you have any questions or need assistance, please
        don&apos;t hesitate to contact us. We&apos;re here to help!
      </p>

      <p>
        Warm regards,
        <br />
        <b>Kids Republic</b>
      </p>

      <button className="custom aqua" onClick={handlePayment}>
        Proceed to Payment &nbsp;&nbsp;
        <ArrowRightOutlined />
      </button>
    </div>
  );
}

export default PayFirst;
