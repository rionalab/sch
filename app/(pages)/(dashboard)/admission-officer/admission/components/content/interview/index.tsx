import React from "react";
import { Descriptions, type DescriptionsProps } from "antd";
import { HMA, dMY, getImage, s, uploadFileClient } from "@/libs/helpers";
import { UserOutlined } from "@ant-design/icons";
import { FieldUpload } from "@/c";
import type { UploadFile } from "antd";
import { useEffect, useState } from "react";
import { useAntdContext } from "@/contexts";
import { notifTryAgain } from "@/consts";
import { uploadFileInterview } from "../../../action";
import Image from "next/image";
import { usePathname } from "next/navigation";

function ChildDetailInterview({ data, data2 }: any) {
  // console.clear();
  // console.log(444, data, data2);

  const { api } = useAntdContext();
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const { id } = data2;
  const [img, setImg] = useState(data?.aggrementLetterFile ?? "");

  const generalInfo: DescriptionsProps["items"] = [
    {
      key: "a",
      label: "Result",
      children: data.result === "PASS" ? "Pass" : "Pass With Note",
    },
    {
      key: "b",
      label: "Email",
      children: data.emails,
    },
    {
      key: "date",
      label: "Date",
      children: dMY(data.date),
    },
    {
      key: "time",
      label: "Time",
      children: HMA(data.time),
    },
    {
      key: "location",
      label: "Location",
      children: data.location,
    },
    {
      key: "remarks",
      label: "Remarks",
      children: data.remarks,
    },
  ];

  const doUpload = async () => {
    try {
      if (fileList.length) {
        // upload
        const filename = await uploadFileClient(fileList);
        console.log(filename);

        if (img) {
          setImg(`${img},${filename}`);
        } else {
          setImg(filename);
        }

        // update db
        const final = {
          ...data2.data,
          interview: {
            ...data2.data.interview,
            aggrementLetterFile: img,
          },
        };
        const w = await uploadFileInterview(id, final);
        // console.log({ w });

        // reset
        setFileList([]);

        api?.success({
          message: "Upload File",
          description: "Filed uploaded  successfully",
          duration: 2.5,
        });
      }
    } catch (e: any) {
      const msg = String(e.message);
      api?.error(notifTryAgain(msg));
    }
  };

  useEffect(() => {
    doUpload();
  }, [fileList]);

  useEffect(() => {
    setFileList([]);
  }, []);

  const pathname = usePathname();

  const isParentView = pathname.split("/").filter(Boolean)[0] === "admission";

  // console.clear();
  // console.log(img);
  // console.log(444, data, data2, img, data.aggrementLetterFile);
  // console.log(11111111111, isParentView, pathname, pathname.split("/"));

  return (
    <div>
      <Descriptions
        layout="vertical"
        column={3}
        className="customLabel"
        title={
          <>
            <UserOutlined className="mr4" />
            Interview Information
          </>
        }
        items={generalInfo}
      />
      <br />
      <br />
      <h4 style={{ background: "#eee", paddingLeft: 8, marginBottom: 16 }}>
        Aggrement Letter
      </h4>
      {!isParentView && (
        <FieldUpload
          fileList={fileList}
          setFileList={setFileList}
          label={"File "}
          type="image"
          name="trial"
        />
      )}
      <div
        style={{
          display: "grid",
          gap: 16,
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        <>
          {img &&
            img.split(",").map((img: string, i: any) => (
              <a
                href={getImage(img)}
                target="_blank"
                style={{ cursor: "pointer", border: "1px solid #eee" }}
                key={img}
              >
                <Image
                  alt="profile"
                  objectFit="cover"
                  width={406}
                  quality={100}
                  style={{ width: "100%", objectFit: "contain" }}
                  // className={styles.photo}
                  height={381}
                  src={getImage(img)}
                />
              </a>
            ))}
        </>
      </div>
    </div>
  );
}

export default ChildDetailInterview;
