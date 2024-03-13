"use client";

/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import type { UploadFile, UploadProps } from "antd";
import { uploadRicky } from "./action";

// type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const UploadDemo: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("ando", "132");

    fileList.forEach((file: UploadFile) => {
      console.log(33333333, file.name);
      formData.append("gambar", file as unknown as File);
    });

    setUploading(true);

    await uploadRicky(formData);

    setUploading(false);
  };

  const props: UploadProps = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);

      return false;
    },
    fileList,
  };

  return (
    <>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Select File</Button>
      </Upload>

      <Button
        type="primary"
        onClick={handleUpload}
        disabled={fileList.length === 0}
        loading={uploading}
        style={{ marginTop: 16 }}
      >
        {uploading ? "Uploading" : "Start Upload"}
      </Button>
    </>
  );
};

export default UploadDemo;
