import { options } from "@/app/api/auth/[...nextauth]/options";
import { urls } from "@/consts";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import FormSignin from "./components/form/form";
import styles from "./styles.module.scss";

async function Page() {
  const session = await getServerSession(options);

  if (session) {
    redirect(urls.landingPage);
  }

  return (
    <div className={styles.container}>
      <div className={styles.colLeft}>
        <Image
          className={styles.bg}
          width={720}
          height={540}
          alt="login"
          src={"/images/bg-login.jpg"}
        />
      </div>
      <div className={styles.colRight}>
        <Image
          className={styles.logo}
          width={306}
          height={245}
          alt="login"
          src={"/images/logo.png"}
        />
        <p className={styles.formTitle}>Sign in to Kids Republic</p>
        <button
          onClick={() => {
            // 1.call api to idn
            const price = 1000000;
            const userId = 2;

            // fetch("idn");
          }}
        >
          Payment
        </button>
        <br />
        <br />
        <FormSignin />
      </div>
    </div>
  );
}

export default Page;
