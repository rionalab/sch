import { dMY, getImage } from "@/libs/helpers";
import { cell } from "@/libs/helpers/table";
import { UserOutlined } from "@ant-design/icons";
import type { DescriptionsProps } from "antd";
import { Col, Descriptions, Row } from "antd";
import Image from "next/image";
import { type Employee } from "../../type";
import styles from "./styles.module.scss";
interface Props {
  data: Employee;
}

function TableDetail({ data }: Props) {
  const items: DescriptionsProps["items"] = [
    {
      key: "Phone2",
      label: "Phone 2",
      children: data.phone2,
    },
    {
      key: "familyPhone",
      label: "Family Phone",
      children: data.familyPhone,
    },
    {
      key: "maritalStatus",
      children: data.maritalStatus,
      label: "Marital Status",
    },
    {
      key: "tribe",
      label: "Tribe",
      children: `${data.tribe}`,
    },
    {
      key: "religion",
      label: "Religion",
      children: `${data.religion}`,
    },
    {
      key: "bloodType",
      label: "Blood Type",
      children: cell(data.bloodType),
    },
    {
      key: "spouseName",
      children: data.spouseName,
      label: "Spouse Name",
    },
    {
      key: "fatherName",
      children: data.fatherName,
      label: "Father Name",
    },
    {
      key: "motherName",
      children: data.motherName,
      label: "Mother Name",
    },
    {
      key: "siblingName",
      children: data.siblingName,
      label: "Sibling Name",
    },
    {
      key: "birth",
      label: "Birth",
      children: `${data.placeOfBirth}, ${dMY(data.dob)}`,
    },
    {
      key: "gender",
      label: "Gender",
      children: data.gender,
    },
    {
      key: "education",
      label: "Education",
      children: `${data.degree} ${data.major}, ${data.institution}`,
    },
    {
      key: "5",
      label: "Address",
      children: `${data.idAddress}`,
    },
    {
      key: "houseAddress",
      label: "House Address",
      children: `${data.houseAddress}`,
    },

    {
      key: "remarks",
      label: "Remark",
      children: cell(data.remarks),
    },
    {
      key: "createdAt",
      label: "Created at",
      children: dMY(data.createdAt),
    },
    {
      key: "updatedAt",
      label: "Updated at",
      children: dMY(data.updatedAt),
    },
  ];

  console.log(data);

  return (
    <Row>
      <Col span={20}>
        <Descriptions
          column={3}
          title={
            <>
              <UserOutlined className="mr4" />
              Employee Info : {data.fullName}
            </>
          }
          layout="vertical"
          items={items}
        />
      </Col>
      <Col span={4}>
        <Image
          alt="profile"
          objectFit="cover"
          width={406}
          quality={100}
          className={styles.photo}
          height={381}
          src={data.photo ? getImage(data.photo) : "/images/no-photo.png"}
        />
      </Col>
    </Row>
  );
}

export default TableDetail;
