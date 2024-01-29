import { today, tomorrow } from "@/libs/helpers";
import { Employee } from "@/pages/hrd/employee/type";
import { faker } from "@faker-js/faker";
import { Prisma } from "@prisma/client";
import dayjs from "dayjs";

const fakerData = {
  tribe: "",
  hireDate: today().format(),
  placeOfBirth: faker.location.city(),
};

export const employeeSeed: Prisma.EmployeeCreateInput[] = [
  {
    fullName: "Rika Anggraeni",
    photo: "",
    bloodType: "A",
    unit: "Primary",
    NIP: "1000000001",
    NIK: "1371131301910002",
    dob: dayjs("7/2/84").format(),
    maritalStatus: "Married",
    TMT: today().format(),
    remarks: "",
    PKWTStart: today().format(),
    PKWTEnd: tomorrow().format(),
    position: {
      connect: { id: 1 },
    },
    gender: "Female",
    religion: "Islam",
    idAddress:
      "Jalan Bintara 7 No. 60, RT/RW. 001/002, Bintara, Bekasi Barat 17134",
    houseAddress: "-",
    email: "reecabloo@gmail.com",
    phone1: "089677356148",
    phone2: "-",
    familyPhone: "088211539345",
    degree: "S1",
    institution: "UNAS",
    major: "Hubungan Internasional",
    fatherName: "Sutristo",
    motherName: "Any Ramdano",
    siblingName: "Edy Susanto",
    spouseName: "Budi Hartono",
    contractStatus: "Active",
    childrenName: "Ahmad Agha",
    ...fakerData,
  },
  {
    photo: "",
    bloodType: "A",
    fullName: "Ramadhan Prasetyo",
    unit: "Managemen",
    NIP: "1000000002",
    NIK: "1371121301910002",
    dob: dayjs("2/27/94").format(),
    maritalStatus: "Married",
    gender: "Male",
    religion: "Islam",
    idAddress: "Jl. SPG 7 No.2 Lubang Buaya RT 007/RW 009 Jakarta Timur, 13810",
    houseAddress: "-",
    email: "ramadhan.kidsrepublic@gmail.com",
    phone1: "0812-9741-8454",
    phone2: "021-8408751",
    familyPhone: "08568204348",
    degree: "D3/D4",
    institution: "IISIP",
    major: "Komunikasi",
    position: {
      connect: { id: 1 },
    },
    fatherName: "Suhermanto",
    motherName: "Siti Aisyah",
    siblingName: "Muhammad Shiam Prayoga",
    spouseName: "Yusan Rizki Rahayu",
    childrenName: "Aaron Rizki Pratama",
    TMT: today().format(),
    PKWTStart: today().format(),
    PKWTEnd: tomorrow().format(),
    remarks: "Tidak Active tgl 28 Feb 2023",
    contractStatus: "Inactive",
    ...fakerData,
  },
  {
    photo: "",
    bloodType: "A",
    fullName: "Syifa Fauziah",
    unit: "Managemen",
    NIP: "1000000003",
    NIK: "1371131352910002",
    dob: dayjs("6/19/92").format(),
    maritalStatus: "Married",
    gender: "Female",
    religion: "Islam",
    idAddress: "Jln Pangkalan Jati V No 59 RT 011/005 No 59",
    houseAddress: "Jln Cempaka Bulak RT 003 RW 005 No 43 unit 1B",
    email: "fauziahsyifa438@gmail.com",
    phone1: "087835728566",
    phone2: "-",
    TMT: today().format(),
    familyPhone: "087875981255",
    degree: "S1",
    institution: "STIE Swadaya",
    major: "Management",
    position: {
      connect: { id: 1 },
    },
    fatherName: "Alif Hardianto",
    motherName: "Sutarsih",
    siblingName: "Ramzy Nur Fauzan",
    spouseName: "Prade Kunto Arief Dwi Sanjaya",
    childrenName: "Daniyal Zhafran Radefa",
    PKWTStart: dayjs("9/6/2021").format(),
    PKWTEnd: dayjs("9/6/2023").format(),
    contractStatus: "Active",
    ...fakerData,
  },
  {
    photo: "",
    bloodType: "",
    fullName: "Novia Rizky Sulaiman",
    unit: "Preschool & Kindergarten",
    NIP: "1000000004",
    NIK: "1371131301510002",
    email: "noviarizkysulaiman@gmail.com",
    dob: dayjs("2/5/93").format(),
    maritalStatus: "Married",
    gender: "Female",
    religion: "Islam",
    idAddress:
      "Jl. Raya Ragunan, Gang Mawar, Pasar Minggu, Rt. 012/03, Jakarta Selatan - 12520",
    houseAddress:
      "Jl. Masjid Jami Nurul Huda, Kampung Babakan, Desa Tahurhalang, Kabupaten Bogor - 16320",
    phone1: "081295148764",
    phone2: "-",
    familyPhone: "081380385411",
    degree: "S1",
    institution: "Universitas Indraprasta PGRI",
    major: "Pendidikan Bahasa Inggris",
    fatherName: "Alm. Idup Sulaiman",
    motherName: "Rukaya Lantong",
    siblingName: "Noval Sulaeman & Siti Azizah Sulaiman",
    spouseName: "Perri Hanto",
    childrenName: "Azzam Aulia Shakeil",
    TMT: dayjs("10/1/21").format(),
    PKWTStart: today().format(),
    PKWTEnd: tomorrow().format(),
    position: {
      connect: { id: 1 },
    },
    contractStatus: "Active",
    ...fakerData,
  },
  {
    photo: "",
    bloodType: "",
    fullName: "Ratih Puspitasari",
    unit: "Preschool & Kindergarten",
    NIP: "1000000005",
    NIK: "1374431301910002",
    dob: dayjs("11/28/86").format(),
    maritalStatus: "Married",
    gender: "Female",
    religion: "Islam",
    idAddress: "Jl. Sambisari A.260, Duta Kranji, Bintara - Bekasi Barat",
    houseAddress: "-",
    email: "ra.puspitasari@gmail.com",
    phone1: "081291418642",
    phone2: "Tidak ada",
    familyPhone: "081291418643",
    degree: "S1",
    institution: "UI",
    major: "Ilmu Kesejahteraan Sosial",
    fatherName: "Hidayat Effendi",
    motherName: "Sofiah Muchtar",
    siblingName: "Astri Lestari dan M. Wildan Fadhilah",
    spouseName: "Galih Sendika Artistya",
    childrenName: "M. Ammar Artistya",
    position: {
      connect: { id: 1 },
    },
    PKWTStart: dayjs("10/23/2015").format(),
    PKWTEnd: dayjs("10/23/2017").format(),
    TMT: dayjs("1/8/18").format(),
    contractStatus: "Active",
    ...fakerData,
  },
  {
    photo: "",
    bloodType: "",
    fullName: "Kartika Nur April",
    unit: "Preschool & Kindergarten",
    NIP: "1000000006",
    NIK: "1371131301977002",
    dob: dayjs("4/6/82").format(),
    maritalStatus: "Separated",
    gender: "Female",
    religion: "Islam",
    idAddress: "Komplek Masnaga Bintara Jaya",
    houseAddress:
      "Kp. Setu Bintara Jaya Rt. 04/Rw. 01 No. 88. Bintara Jaya. Bekasi Barat  ",
    email: "baningbaning12@gmail.com",
    phone1: "081218024114",
    phone2: "-",
    familyPhone: "081283764943",
    degree: "S1",
    institution: "Universitas Krisnadwipayana",
    major: "Jurusan Administrasi Niaga",
    fatherName: "Warkim",
    motherName: "Ningsih",
    siblingName: "Romadona",
    spouseName: "-",
    childrenName: "Banyu Baning Putera Nugraha",
    TMT: dayjs("7/5/21").format(),
    PKWTStart: dayjs("7/5/2021").format(),
    PKWTEnd: dayjs("7/5/2023").format(),
    position: {
      connect: { id: 2 },
    },
    contractStatus: "Active",
    ...fakerData,
  },
];