"use client";

import { FieldUpload } from "@/c";
import { notifTryAgain } from "@/consts";
import { useAntdContext } from "@/contexts";
import { uploadFileClient } from "@/libs/helpers";
import type { VoidMethod } from "@/types";
import type { UploadFile } from "antd";
import { Form, Modal } from "antd";
import { useEffect, useState } from "react";
import { submitAssessment } from "../../action";
import type { StudentRegistration } from "../../type";

interface Props {
  data?: StudentRegistration;
  open: boolean;
  openModal: VoidMethod;
  closeModal: VoidMethod;
}

function ModalSubmitAssessment(props: Props) {
  const { open, data, closeModal, openModal } = props;
  const [form] = Form.useForm();
  const { api } = useAntdContext();
  const [loading, setloading] = useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [fileList2, setFileList2] = useState<UploadFile[]>([]);
  const [fileList3, setFileList3] = useState<UploadFile[]>([]);
  const [fileList4, setFileList4] = useState<UploadFile[]>([]);
  const [fileList5, setFileList5] = useState<UploadFile[]>([]);
  const { unit } = JSON.parse(data?.data?.studentRegistration1 ?? "{}");

  //   console.clear();
  //   console.log(11, w, data);

  const onFinish = async () => {
    try {
      console.clear();
      // console.log({ data, asd, unit, id });

      setloading(true);
      let assessmentResult: Record<string, string> = {};

      if (unit === "Preschool") {
        if (!fileList4.length || !fileList5.length) {
          throw new Error("Please check your file upload");
        }
        assessmentResult["trial"] = await uploadFileClient(fileList4);
        assessmentResult["observation"] = await uploadFileClient(fileList5);
      } else {
        if (!fileList.length || !fileList2.length || !fileList3.length) {
          throw new Error("Please check your file upload");
        }
        assessmentResult["psycotest"] = await uploadFileClient(fileList);
        assessmentResult["classObservation"] =
          await uploadFileClient(fileList2);
        assessmentResult["furtherAssessment"] =
          await uploadFileClient(fileList3);
      }

      const resp = await submitAssessment(Number(data?.id), assessmentResult);

      console.clear();
      console.log(resp);

      api?.success({
        message: "Assessment Invitation",
        description: "Invitation sent successfully",
        duration: 2.5,
      });

      closeModal();
    } catch (e: any) {
      const msg = String(e.message);
      api?.error(notifTryAgain(msg));
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    if (open) {
      form.resetFields();
      setFileList([]);
      setFileList2([]);
      setFileList3([]);
      setFileList4([]);
      setFileList5([]);
    }
  }, [open]);

  return (
    <div>
      <Modal
        title="Submit Assessment Result"
        open={open}
        width={`60vw`}
        okText="Submit"
        cancelButtonProps={{ disabled: loading }}
        okButtonProps={{ loading }}
        onOk={onFinish}
        onCancel={closeModal}
      >
        <Form
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          //  initialValues={{ ...initialValues }}
          form={form}
          onFinish={onFinish}
          autoComplete="off"
        >
          <br />

          {unit !== "Preschool" ? (
            <>
              <FieldUpload
                fileList={fileList}
                setFileList={setFileList}
                label={"psycotest "}
                type="image"
                name="psycotest"
              />
              <FieldUpload
                fileList={fileList2}
                setFileList={setFileList2}
                label={"Class Observation "}
                type="image"
                name="classObservation"
              />
              <FieldUpload
                fileList={fileList3}
                setFileList={setFileList3}
                label={"Further Assessment "}
                type="image"
                name="furtherAssessment"
              />
            </>
          ) : (
            <>
              <FieldUpload
                fileList={fileList4}
                setFileList={setFileList4}
                label={"trial "}
                type="image"
                name="trial"
              />
              <FieldUpload
                fileList={fileList5}
                setFileList={setFileList5}
                label={"Observation"}
                type="image"
                name="observation"
              />
            </>
          )}
        </Form>
      </Modal>
    </div>
  );
}

export default ModalSubmitAssessment;
