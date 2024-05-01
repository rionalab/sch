"use client";

import { LoadingModule } from "@/c";
import { urls } from "@/consts";
import { useAntdContext } from "@/contexts";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { buyForm, show } from "../action";

function page() {
  const { id } = useParams();
  const [form, setForm] = useState<any>();
  const [userId, setUserId] = useState<any>();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { api } = useAntdContext();

  const handlePayment = async () => {
    try {
      await buyForm(Number(id), Number(userId));
      router.push(urls.admission.paymentSuccess);
    } catch (e: any) {
      api?.error({
        message: "Purchasement Failed!",
        description: e.message,
      });
    }
  };

  const fetchForm = async () => {
    const response = await show(Number(id));
    setLoading(false);
    setForm(response);
  };

  useEffect(() => {
    setUserId(localStorage.getItem("auth"));
    fetchForm();
  }, []);

  if (loading) {
    return <LoadingModule />;
  }

  if (!form) {
    return (
      <div className="post">
        <br />
        <br />
        <center>
          <h3>Not found</h3>
          <button
            onClick={() => {
              router.push(urls.admission.forms);
            }}
            className="aqua"
          >
            Back
          </button>
        </center>
      </div>
    );
  }

  return (
    <div className="post">
      <br />
      <br />
      <h3>{form.name}</h3>
      <p>{form.remarks}</p>
      <button
        className="aqua"
        onClick={() => {
          handlePayment();
        }}
      >
        Continue to Payment&nbsp;&nbsp;
        <ArrowRightOutlined />
      </button>
    </div>
  );
}

export default page;
