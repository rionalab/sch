import { Tag } from "@/c";
import { dMY, getImage } from "@/libs/helpers";
import { type ColumnsType } from "antd/es/table";
import { type StudentRegistration } from "../../type";
import ModalDetail from "./modal-detail";

export const columns: ColumnsType<StudentRegistration> = [
  {
    title: "Name",
    width: 222,
    fixed: "left",

    render: (val, row) => {
      const x = JSON.parse(row?.data?.studentRegistration1 ?? "{}");


      return (
        <ModalDetail
          image={x.photo ? getImage(x.photo) : ""}
          title={x.fullName}
          row={row}
        />
      );
    },
  },
  {
    title: "Status",
    width: 97,
    fixed: "left",
    render: (val, row) => {
      const status = row.progress;
      const theme = status === "New" ? "green" : "blue";
      return <Tag theme={theme} label={status} />;
    },
  },
  {
    title: "Payment Code",
    width: 151,
    dataIndex: "paymentCode",
  },
  {
    title: "Method",
    width: 111,
    dataIndex: "method",
  },
  {
    title: "Unit",
    width: 111,
    render: (val, row) => {
      const x = JSON.parse(row?.data?.studentRegistration1 ?? "{}");
      return x.unit;
    },
  },
  {
    title: "Regis. Date",
    width: 150,
    render: (val, row) => {
      const x = JSON.parse(row?.data?.studentRegistration1 ?? "{}");
      return dMY(x.regisDate);
    },
  },
  {
    title: "Birth",
    width: 200,
    render: (val, row) => {
      const x = JSON.parse(row?.data?.studentRegistration1 ?? "{}");
      return `${x.placeOfBirth}, ${dMY(x.dob)}`;
    },
  },
  {
    title: "Gender",
    width: 110,
    render: (val, row) => {
      const x = JSON.parse(row?.data?.studentRegistration1 ?? "{}");
      return x.gender;
    },
  },
  {
    title: "Religion",
    width: 110,
    render: (val, row) => {
      const x = JSON.parse(row?.data?.studentRegistration1 ?? "{}");
      return x.religion;
    },
  },
  {
    title: "nationality",
    width: 110,
    render: (val, row) => {
      const x = JSON.parse(row?.data?.studentRegistration1 ?? "{}");
      return x.nationality;
    },
  },
  {
    title: "Birth Order",
    width: 110,
    render: (val, row) => {
      const x = JSON.parse(row?.data?.studentRegistration1 ?? "{}");
      return x.birthOrder;
    },
  },

  {
    title: "Languages",
    width: 222,
    render: (val, row) => {
      const x = JSON.parse(row?.data?.studentRegistration1 ?? "{}");
      return x.languages;
    },
  },
  {
    title: "City",
    width: 110,
    render: (val, row) => {
      const x = JSON.parse(row?.data?.studentRegistration1 ?? "{}");
      return x.city;
    },
  },
  {
    title: "Address",
    width: 310,
    render: (val, row) => {
      const x = JSON.parse(row?.data?.studentRegistration1 ?? "{}");
      return x.houseAddress;
    },
  },
  {
    title: "To School By",
    width: 170,
    render: (val, row) => {
      const x = JSON.parse(row?.data?.studentRegistration1 ?? "{}");
      return x.goingToShoolBy;
    },
  },
  {
    title: "Distance to School",
    width: 150,
    render: (val, row) => {
      const x = JSON.parse(row?.data?.studentRegistration1 ?? "{}");
      return x.distance + "Km";
    },
  },
];
