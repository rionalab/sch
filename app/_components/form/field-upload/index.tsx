import { imageUploadType } from "@/consts";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadFile } from "antd";
import { Button, Form, Upload, message } from "antd";
import { Dispatch, type SetStateAction } from "react";

interface Props<T> {
  name: keyof T;
  type: "image";
  label: string;
  fileList: UploadFile[];
  setFileList: Dispatch<SetStateAction<UploadFile<any>[]>>;
  previewFile?: boolean;
}

export function FieldUpload<T>({
  name,
  fileList,
  setFileList,
  label,
  type,
  previewFile = true,
}: Props<T>) {
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const accept = type === "image" ? "image/png, image/jpeg, image/jpg" : "";

  return (
    <>
      <Form.Item
        label={label}
        name={name as string}
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload
          fileList={fileList}
          showUploadList={true}
          // previewFile={previewFile}
          accept={accept}
          onRemove={(file) => {
            const index = fileList.indexOf(file);
            const newFileList = fileList.slice();
            newFileList.splice(index, 1);
            setFileList(newFileList);
          }}
          beforeUpload={(file) => {
            const isImage = imageUploadType.includes(file.type);
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (type === "image") {
              if (!isImage) {
                void message.error(`${file.name} is not an image file`);
                setFileList([]);
              }
            }

            if (!isLt2M) {
              void message.error("File must smaller than 2MB!");
              setFileList([]);
            }

            setFileList([...fileList, file]);

            return false;
            // return isImage || Upload.LIST_IGNORE;
          }}
          maxCount={1}
          name="logo"
        >
          <Button style={{ marginLeft: "4px" }} icon={<UploadOutlined />}>
            {" "}
            Click to upload
          </Button>
        </Upload>
      </Form.Item>
    </>
  );
}
