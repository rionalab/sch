"use client";

import { urls } from "@/consts";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();

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
        Form Name: [Enter Form/Document Name]
        <br />
        Transaction ID: [Enter Transaction ID]
        <br />
        Amount: [Enter Amount]
        <br />
        Date: [Enter Date]
        <br />
        <br />
        <br />
        Thank you for choosing our service. If you have any further inquiries or
        require assistance.
        <br />
        Please feel free to contact our support team at [Enter Contact
        Information].
      </p>
      <br />

      <p>
        Best regards, <b>Kids Republic</b>
      </p>

      <button
        onClick={() => {
          router.push(urls.admission.forms);
        }}
        className="aqua"
      >
        Back to Forms
      </button>
    </div>
  );
}

export default Page;
