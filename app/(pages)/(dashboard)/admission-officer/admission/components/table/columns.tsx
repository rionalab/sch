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
      return (
        <ModalDetail
          image={row.data.photo ? getImage(row.data.photo) : ""}
          title={row.data.fullName}
          row={row}
        />
      );
    },
  },
  {
    title: "Status",
    width: 77,
    fixed: "left",
    render: (val, row) => {
      const status = row.data.status;
      const theme = status === "new" ? "green" : "blue";
      return <Tag theme={theme} label={status} />;
    },
  },
  {
    title: "Unit",
    width: 111,
    render: (val, row) => {
      return row.data.unit;
    },
  },
  {
    title: "Regis. Date",
    width: 200,
    render: (val, row) => {
      return dMY(row.data.regisDate);
    },
  },
  {
    title: "Birth",
    width: 200,
    render: (val, row) => {
      return `${row.data.placeOfBirth}, ${dMY(row.data.dob)}`;
    },
  },
  {
    title: "Gender",
    width: 110,
    render: (val, row) => {
      return row.data.gender;
    },
  },
  {
    title: "Religion",
    width: 110,
    render: (val, row) => {
      return row.data.religion;
    },
  },
  {
    title: "nationality",
    width: 110,
    render: (val, row) => {
      return row.data.nationality;
    },
  },
  {
    title: "Birth Order",
    width: 110,
    render: (val, row) => {
      return row.data.birthOrder;
    },
  },

  {
    title: "Languages",
    width: 222,
    render: (val, row) => {
      return row.data.languages;
    },
  },
  {
    title: "City",
    width: 110,
    render: (val, row) => {
      return row.data.city;
    },
  },
  {
    title: "Address",
    width: 310,
    render: (val, row) => {
      return row.data.houseAddress;
    },
  },
  {
    title: "To School By",
    width: 170,
    render: (val, row) => {
      return row.data.goingToShoolBy;
    },
  },
  {
    title: "Distance to School",
    width: 150,
    render: (val, row) => {
      return row.data.distance + "Km";
    },
  },
  // {
  //   title: "PKWT",
  //   width: 220,
  //   dataIndex: "religion",
  //   render: (val, row) => {
  //     return [dMY(row.PKWTStart), dMY(row.PKWTEnd)].join(" - ");
  //   },
  // },
  // {
  //   title: "NIK",
  //   width: 210,
  //   dataIndex: "NIK",
  // },
];
