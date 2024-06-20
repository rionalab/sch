"use client";

import { CONTACT_CS } from "@/app/_configs/app";
import { LoadingModule } from "@/c";
import { urls } from "@/consts";
import { c, dMYHis, s } from "@/libs/helpers";
import { notFound, useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { ParentForm } from "../../forms/type";
import { findPurchaseAdmission } from "../../action";

function Page() {
  const router = useRouter();
  const { id } = useParams();
  const [data, setData] = useState<ParentForm[]>([]);
  const [form, setForm] = useState<null | Record<string, any>>();
  const [loading, setLoading] = useState(true);

  const fetchOwned = async () => {
    const userId = localStorage.getItem("auth");
    const resp = await findPurchaseAdmission(Number(id), Number(userId));

    setForm(resp);
    setLoading(false);
  };

  useEffect(() => {
    void fetchOwned();
  }, []);

  if (loading) {
    return <LoadingModule />;
  }

  if (!form) {
    return notFound();
  }

  return (
    <div className="post">
      <br />
      <br />
      <br />
      <br />
      <h3>Payment Successfull!</h3>
      <p>Dear Parent,</p>

      <p>
        We are pleased to inform you that your payment for the form/document has
        been successfully processed.
        <br />
        Your transaction has been completed, and your form/document request is
        now being processed.{" "}
      </p>
      <br />

      <p>
        <span style={{ fontWeight: 500 }}>Transaction Details:</span>
        <br />
        Form Name: {s(form?.type)}
        <br />
        Transaction Code: {s(form?.code)}
        <br />
        Amount: {s(c(form?.price))}
        <br />
        Date: {s(dMYHis(form?.createdAt))}
        <br />
        <br />
        <br />
        Thank you for choosing our service. If you have any further inquiries or
        require assistance.
        <br />
        Please feel free to contact our support team at {CONTACT_CS}.
      </p>
      <br />

      <p>
        Best regards, <b>Kids Republic</b>
      </p>

      <button
        onClick={() => {
          router.push(urls.admission.childrenData);
        }}
        className="custom aqua"
      >
        Admission
      </button>
    </div>
  );
}

export default Page;
