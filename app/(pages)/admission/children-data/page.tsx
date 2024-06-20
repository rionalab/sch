"use client";

import { LoadingModule } from "@/c";
import { notifDestroyError, notifDestroySuccess, urls } from "@/consts";
import { useAntdContext } from "@/contexts";
import useToggle from "@/hooks/usePopup";
import {
  destroy,
  indexByParent,
} from "@/pages/(dashboard)/admission-officer/admission/action";
import TableDetail from "@/pages/(dashboard)/admission-officer/admission/components/table/table-detail";
import {
  InfoCircleOutlined,
  EditOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { Button, Modal, Table, Tooltip } from "antd";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getAvailableAdmissionTicket, purchaseNewAdmission } from "../action";
import BtnDelete from "../components/BtnDelete";
import { parentHasRegister } from "../helper";
import { CONTACT_CS } from "@/app/_configs/app";
import ModalDetailAdmission from "@/pages/(dashboard)/admission-officer/admission/components/table/modal-detail";
import { getImage } from "@/libs/helpers";

function page() {
  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingPurchase, setLoadingPurchase] = useState(false);
  const [row, setRow] = useState<any>({});
  const [tickets, setTickets] = useState<any>([]);
  const { api } = useAntdContext();
  const { status, setTrue, setFalse } = useToggle();
  const router = useRouter();
  const confirmBuy = useToggle();

  const columns = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
      render: (a: any, row: any, index: number) => {
        return index + 1;
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (a: any, row: any) => {
        const x = JSON.parse(row.data.studentRegistration1);
        console.log(x, row);
        // return <b style={{ fontWeight: 600 }}>{x.fullName}</b>;

        return (
          <ModalDetailAdmission
            image={x.photo ? getImage(x.photo) : ""}
            title={x.fullName}
            row={row}
          />
        );
      },
    },

    {
      title: "Payment Code",
      dataIndex: "paymentCode",
      key: "paymentCode",
      render: (a: any, row: any) => {
        return row.paymentCode;
      },
    },

    {
      title: "Unit",
      dataIndex: "unit",
      key: "unit",
      render: (a: any, row: any) => {
        const x = JSON.parse(row.data.studentRegistration1);
        return x.unit;
      },
    },

    {
      title: "status",
      dataIndex: "status",
      key: "status",
      render: (a: any, row: any) => {
        return (
          <>
            {row.status}{" "}
            {row.status === "New" && (
              <Tooltip
                title={`Waiting for  Student Assessment / Trial  schedule. Or please call ${CONTACT_CS} to check admission status`}
              >
                <InfoCircleOutlined />
              </Tooltip>
            )}
          </>
        );
      },
    },

    {
      title: "Action",
      dataIndex: "action",
      width: 122,
      key: "action",
      render: (a: any, row: any) => {
        const btnAttr = (type: "use" | "buy") => ({
          size: "small" as SizeType,
          className: "custom table mb4 " + (type === "use" ? "aqua" : "yellow"),
          block: true,
        });

        return (
          <>
            {/* <Button type="primary" size="small" icon={<EditOutlined />} /> */}
            &nbsp;
            {/* <Button type="primary" size="small" icon={<EyeOutlined />} /> */}
            &nbsp;
            <BtnDelete onConfirm={() => confirmDelete(row.id)} />
          </>

          // <Button
          //   {...btnAttr("use")}
          //   onClick={() => {
          //     setTrue();
          //     setRow(row);
          //   }}
          // >
          //   Detail
          // </Button>

          // <ButtonGroup />
        );
      },
    },
  ];

  const confirmDelete = async (id: number) => {
    try {
      const del = await destroy(id);

      console.log(del);
      api?.success(notifDestroySuccess());
      router.refresh();
    } catch (e: any) {
      api?.error(notifDestroyError());
    }
  };
  const getChildren = async (id: number) => {
    const admissions = await indexByParent(id);
    setRows(
      admissions.map((row) => {
        return {
          ...row,
          key: row.id,
          data: JSON.parse(row.data),
        };
      }),
    );
  };
  const newAdmission = () => {
    if (tickets.length < 1) {
      confirmBuy.setTrue();
    } else {
      router.push(urls.admission.newChildrenData);
    }
  };
  const purchaseAdmission = async () => {
    setLoadingPurchase(true);

    const userId = localStorage.getItem("auth");

    if (userId) {
      const x = await purchaseNewAdmission(Number(userId));

      if (x) {
        router.push(urls.admission.paymentSuccess(String(x.id)));
      } else {
        setLoadingPurchase(false);
        api?.error({
          message: "Purchase Fail",
          description: "Something went wrong",
          duration: 4,
        });
      }
    }
  };
  const getTickets = async (id: number) => {
    const res = await getAvailableAdmissionTicket(id);
    setTickets(res);
    console.log(res);
  };
  const init = async () => {
    const parentRegister = await parentHasRegister();

    if (!parentRegister) {
      router.push(urls.admission.parentData);
    } else {
      setLoading(false);
      const id = localStorage.getItem("auth");
      getChildren(Number(id));
      getTickets(Number(id));
    }
  };

  useEffect(() => {
    init();
  }, []);

  if (loading) {
    return <LoadingModule />;
  }

  return (
    <>
      <Modal
        okButtonProps={{ style: { display: "none" } }}
        closeIcon={false}
        open={status}
        cancelText="Close"
        width={900}
        onCancel={setFalse}
      >
        <TableDetail data={row} />
      </Modal>

      <Modal
        open={confirmBuy.status}
        title="Purchase New Admission"
        okText={loadingPurchase ? "Redirecting..." : "Continue"}
        okButtonProps={{ disabled: loadingPurchase }}
        cancelButtonProps={{ disabled: loadingPurchase }}
        onOk={() => purchaseAdmission()}
        onCancel={confirmBuy.setFalse}
      >
        You will be redirected to the payment page to submit a new admission,
        continue?
      </Modal>

      <div className="post">
        <br />
        <br />
        <h3>Admission</h3>
        <br />
        <button
          onClick={newAdmission}
          style={{ marginTop: "-16px" }}
          className="custom yellow"
        >
          + New Admission
        </button>
        <p style={{ marginTop: "16px" }}>
          You have <b>{tickets.length}</b> ticket to submit new admission. Learn
          more about new admission{" "}
          <Link href={urls.admission.help_admission}>here</Link>
        </p>

        <br />
        <br />
        <Table size="small" dataSource={rows} columns={columns} />
      </div>
    </>
  );
}

export default page;
