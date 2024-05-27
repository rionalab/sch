"use client";

import { LoadingModule } from "@/c";
import { urls } from "@/consts";
import { useAntdContext } from "@/contexts";
import { Prisma } from "@prisma/client";
import { useParams, useRouter } from "next/navigation";
import { memo, useEffect, useState } from "react";
import { buyForm, ownedByFormId, show } from "../action";
import FormError from "./components/form-error";
import PurchaseHistory from "./components/purchase-history/page";

function Page() {
  const { id } = useParams();
  const [form, setForm] = useState<null | Prisma.DocumentsCreateInput>();
  const [purchaseList, setPurchaseList] = useState<
    Prisma.ParentFormCreateInput[]
  >([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { api } = useAntdContext();

  const fetchForm = async (userId: number) => {
    try {
      if (form) {
        return;
      }

      const formDetail = await show(Number(id));

      // jika bayar
      if (formDetail?.isPaid) {
        const fetchPurchaseList = await ownedByFormId(Number(id), userId);
        // @ts-expect-error asd
        setPurchaseList(fetchPurchaseList);
      }

      setForm(formDetail);
    } catch (e: any) {
      console.error(e.message);
      api?.error({
        message: "Something went wrong",
        description: e.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const handlePayment = async () => {
    try {
      const price = form?.price ?? 0;
      const userId = localStorage.getItem("auth");
      await buyForm(Number(id), Number(userId), price);
      router.push(urls.admission.paymentSuccess(String(id)));
    } catch (e: any) {
      api?.error({
        message: "Purchasement Failed!",
        description: e.message,
      });
    }
  };

  useEffect(() => {
    void fetchForm(Number(localStorage.getItem("auth")));
  }, []);

  const hasUnusedQuota = purchaseList?.find((row) => !row.isUsed);

  function handleUseForm() {
    if (form) {
      localStorage.setItem("formId", String(id));
      router.push(form?.path ?? "#");
    }
  }

  if (loading) {
    return <LoadingModule />;
  }

  if (!form) {
    return <FormError />;
  }

  return (
    <div className="post">
      <br />
      <br />
      <h3>{form.name}</h3>
      {(!form.isPaid || hasUnusedQuota) && (
        <button
          onClick={() => {
            handleUseForm();
          }}
          className="custom yellow"
        >
          Use Form
        </button>
      )}
      &nbsp;&nbsp;
      {form.isPaid && (
        <>
          <button
            onClick={() => {
              handlePayment();
            }}
            className="custom aqua"
          >
            Buy
          </button>
          &nbsp;&nbsp;
          <PurchaseHistory data={purchaseList} />
        </>
      )}
      <br />
      <br />
      <br />
      <p>{form.remarks}</p>
    </div>
  );
}

export default memo(Page);

/* 


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
            className="custom aqua"
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
        className="custom aqua"
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


*/
