"use client";

import { DataTable } from "@/c";
import useToggle from "@/hooks/usePopup";
import useRole from "@/hooks/useRole";
import { useTable } from "@/hooks/useTable";
import type { ColumnsType } from "antd/es/table";
import { useAntdContext } from "@/contexts";
import { useState } from "react";
import { destroy } from "../../action";
import { type StudentRegistration } from "../../type";
import ModalInterview from "../modal-interview";
import { columns } from "./columns";
import ModalSubmitAssessment from "../modal-submit-assessment";
import ModalAssResult from "../modal-assessment-result";
import ModalPayment from "../modal-payment";
import { useSession } from "next-auth/react";
import type { UserSession } from "@/types";

const alreadyPayment = {
  message: "Submit Assessment",
  description: "Payment Already. Action Unavailable",
  duration: 2.5,
};

interface Props {
  rows: StudentRegistration[];
}

type DtColumns = ColumnsType<Record<string, any>>;

function Table({ rows }: Props) {
  const { allowDelete, allowCreate, allowEdit } = useRole("ao_admission");
  const tableProps = useTable<StudentRegistration>({ rows });
  const modalInterview = useToggle();
  const modalSubmitAssessment = useToggle();
  const modalAssResult = useToggle();
  const modalPayment = useToggle();
  const [dataInterview, setDataInterview] = useState<StudentRegistration>();
  const { api } = useAntdContext();
  const { data: session } = useSession();
  const userSession = (session?.user as UserSession) || {};

  const isSchoolOfficer = userSession?.role?.name === "SchoolOfficer";

  return (
    <>
      <ModalInterview
        data={dataInterview}
        open={modalInterview.status}
        openModal={modalInterview.setTrue}
        closeModal={modalInterview.setFalse}
      />

      <ModalSubmitAssessment
        data={dataInterview}
        open={modalSubmitAssessment.status}
        openModal={modalSubmitAssessment.setTrue}
        closeModal={modalSubmitAssessment.setFalse}
      />

      <ModalAssResult
        data={dataInterview}
        open={modalAssResult.status}
        openModal={modalAssResult.setTrue}
        closeModal={modalAssResult.setFalse}
      />

      <ModalPayment
        data={dataInterview}
        open={modalPayment.status}
        openModal={modalPayment.setTrue}
        closeModal={modalPayment.setFalse}
      />

      <DataTable
        antdProps={{
          scroll: { x: 1600, y: 555 },
        }}
        filter={true}
        create={allowCreate}
        download={true}
        columns={columns as DtColumns}
        {...tableProps}
        actionsAsDropdown={true}
        actions={
          isSchoolOfficer
            ? {
                others: [
                  {
                    label: "Payment",
                    onClick: (row: any) => {
                      if (row.progress === "Interview") {
                        setDataInterview(row);
                        modalPayment.setTrue();
                        return;
                      } else {
                        api?.info({
                          message: "    Assessment",
                          description: "Admission result has not uploaded yet",
                          duration: 2.5,
                        });
                      }
                    },
                    key: "o4",
                  },
                ],
              }
            : {
                others: [
                  {
                    label: "Send Assessment",
                    onClick: (row: any) => {
                      if (row.progress !== "New") {
                        api?.info({
                          message: "Send Assessment",
                          description: "Action not available",
                          duration: 2.5,
                        });

                        return;
                      } else if (row.progress === "Payment") {
                        api?.info(alreadyPayment);

                        return;
                      }

                      setDataInterview(row);
                      modalInterview.setTrue();
                    },
                    key: "o1",
                  },
                  {
                    label: "Submit Assessment",
                    onClick: (row: any) => {
                      if (row.progress === "New") {
                        api?.info({
                          message: "Submit Assessment",
                          description: "Assessment invitation has not sent yet",
                          duration: 2.5,
                        });

                        return;
                      } else if (row.progress === "Payment") {
                        api?.info(alreadyPayment);

                        return;
                      }

                      setDataInterview(row);
                      modalSubmitAssessment.setTrue();
                    },
                    key: "o2",
                  },
                  {
                    label: "Assessment Result",
                    onClick: (row: any) => {
                      if (
                        row.progress === "Evaluation" ||
                        row.progress === "Interview"
                      ) {
                        setDataInterview(row);
                        modalAssResult.setTrue();
                        return;
                      } else if (row.progress === "Payment") {
                        api?.info(alreadyPayment);
                        return;
                      } else {
                        api?.info({
                          message: "Submit Assessment",
                          description: "Admission result has not uploaded yet",
                          duration: 2.5,
                        });
                      }
                    },
                    key: "o3",
                  },
                ],
                // destroy: !allowDelete
                //   ? undefined
                //   : async (id: number, asd: any) => {
                //       console.log(123, id, asd);
                //       // await destroy(id);
                //     },
                // edit: allowEdit,
              }
        }
      />
    </>
  );
}

export default Table;
