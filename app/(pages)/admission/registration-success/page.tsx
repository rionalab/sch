"use client";
import { urls } from "@/consts";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./styles.module.scss";

function page() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Image
        className={styles.img}
        width={512}
        height={512}
        alt="a"
        src={"/images/to-do-list.png"}
      />
      <div>
        <h3 className={styles.h3}>Hooray! Registration Successful! 🎉</h3>
        <p>Thank you for submitting your registration form!</p>
        <p>
          We've received your information, and our team is now reviewing your
          registration. You're one step closer to joining our family! . In the
          meantime, if you have any questions or need assistance, feel free to
          reach out to us at <b>+628 2182 999 123.</b>
        </p>

        <p>
          Thank you for choosing us! We can't wait to welcome you aboard!
          <br />
          Best regards, <b>Kids Republic</b>
        </p>
        <p>
          <button onClick={() => router.push(urls.admission.dashboard)}>
            Dashboard
          </button>
        </p>
      </div>
    </div>
  );
}

export default page;