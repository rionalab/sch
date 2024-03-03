import { redirect } from "next/navigation";
import { urls } from "./_consts";

export default function Home() {
  redirect(urls.auth.signin);
}
