"use client";
import { APP_NAME, CONTACT_CS } from "@/app/_configs/app";
import { urls } from "@/consts";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./styles.module.scss";

function Page() {
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
          We&apos;ve received your information, and our team is now reviewing
          your registration. You&apos;re one step closer to joining our family!
          . In the meantime, if you have any questions or need assistance, feel
          free to reach out to us at <b>{CONTACT_CS}</b>
        </p>

        <p>
          Thank you for choosing us! We can&apos;t wait to welcome you aboard!
          <br />
          Best regards, <b>{APP_NAME}</b>
        </p>
        <p>
          <button
            onClick={() => {
              router.push(urls.admission.dashboard);
            }}
          >
            Dashboard
          </button>
        </p>
      </div>
    </div>
  );
}

export default Page;
