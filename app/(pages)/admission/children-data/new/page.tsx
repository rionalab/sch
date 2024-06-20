"use client";

import React, { useEffect, useState } from "react";
import { getAvailableAdmissionTicket } from "../../action";
import { useRouter } from "next/navigation";
import { urls } from "@/consts";
import { LoadingModule } from "@/c";
import AdmissionForm from "./components/admission-form";

function page() {
  const [loading, setLoading] = useState(true);
  const r = useRouter();

  const init = async () => {
    const x = localStorage.getItem("auth");
    const w = await getAvailableAdmissionTicket(Number(x));

    if (!w.length) {
      r.push(urls.admission.help_admission);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    init();
  }, []);

  if (loading) {
    return <LoadingModule />;
  }

  return (
    <div className="post">
      <br />
      <br />
      <br />
      <h3>New Admission</h3>

      <AdmissionForm />
    </div>
  );
}

export default page;
