"use client";

import { CONTACT_CS } from "@/app/_configs/app";
import { LoadingModule } from "@/c";
import { urls } from "@/consts";
import { c, dMYHis, s } from "@/libs/helpers";
import { notFound, useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { owned, show } from "../../forms/action";
import type { ParentForm } from "../../forms/type";

function Page() {
  const router = useRouter();
  const { id: idDocument } = useParams();
  const [data, setData] = useState<ParentForm[]>([]);
  const [form, setForm] = useState<null | Record<string, any>>();
  const [loading, setLoading] = useState(true);

  const fetchOwned = async (id: number) => {
    const resp = (await owned(id)) as ParentForm[];
    const documents = await show(Number(idDocument));
    setData(resp);
    setForm(documents);
    setLoading(false);
  };

  useEffect(() => {
    const id = localStorage.getItem("auth");
    void fetchOwned(Number(id));
  }, []);

  const flag = data.find((row) => row.documentId === Number(idDocument));

  console.log({ data, flag, form });

  if (loading) {
    return <LoadingModule />;
  }

  if (!flag || flag?.isUsed) {
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
        Form Name: {s(form?.name)}
        <br />
        Transaction Code: {s(flag?.code)}
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
          router.push(urls.admission.forms);
        }}
        className="custom aqua"
      >
        Back to Forms
      </button>
    </div>
  );
}

export default Page;
