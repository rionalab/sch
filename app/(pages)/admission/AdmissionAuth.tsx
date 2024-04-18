"use client";
import { urls } from "@/consts";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function AdmissionAuth({ children }: { children: React.ReactElement }) {
  const router = useRouter();
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (!auth) {
      router.push(urls.admission.signin);
    }

    setAuthed(true);
  }, []);

  if (!authed) {
    return "Please wait...";
  }

  return <>{children}</>;
}

export default AdmissionAuth;
