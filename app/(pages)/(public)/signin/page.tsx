import styles from "./styles.module.scss";
import Image from "next/image";
import FormSignin from "./components/form/form";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

async function Page() {
  const session = await getServerSession(options);

  if (session) {
    redirect("/protected");
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
        <br />
        <br />
        <FormSignin />
      </div>
    </div>
  );
}

export default Page;
