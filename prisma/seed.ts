import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";
import bcrypt from "bcrypt";

const actions =
  "menu_user,menu_master, menu_account,  menu_staff, menu_hr, menu_superadmin, menu_edit_user, menu_create_user, menu_employee, menu_edit_employee, menu_create_employee, menu_role, menu_edit_roles, menu_uom, menu_edit_uom, menu_create_uom, menu_leave, menu_create_leave, menu_edit_leave, menu_vendor, menu_edit_vendor, menu_create_vendor, menu_position, menu_create_position, menu_edit_position, menu_department, menu_create_department, menu_edit_department, menu_leaveRequest, menu_edit_leaveRequest, menu_create_leaveRequest, menu_updatePassword, menu_inventory, menu_edit_inventory, menu_create_inventory, menu_workUnit, menu_edit_workUnit, menu_create_workUnit, menu_leaveType, menu_create_leaveType, menu_edit_leaveType, menu_extracurricular, menu_create_extracurricular, menu_edit_extracurricular, menu_help, menu_documentation";

function today() {
  return dayjs();
}

function tomorrow() {
  return dayjs().add(1, "day");
}

const prisma = new PrismaClient();

async function main() {
  console.log(`############################`);
  console.log(`Start seeding ...`);

  // cleaning
  await prisma.employee.deleteMany();

  // * RoleAction
  // *************************************
  await prisma.roleAction.createMany({
    data: [
      {
        label: "Super Admin",
        name: "Superadmin",
        actions: `${actions}, menu_create_roles`,
      },
      { label: "Administrator", name: "Administrator", actions },
      { label: "Chairman", name: "Chairman", actions: "menu_master" },
      { label: "Manager School", name: "ManagerSchool", actions },
      { label: "Principal", name: "Principal", actions },
      { label: "Teacher", name: "Teacher", actions },
      { label: "Manager Finance", name: "ManagerFinance", actions },
      { label: "Staff Finance", name: "StaffFinance", actions },
      { label: "Manager Marketing", name: "ManagerMarketing", actions },
      { label: "Staff Marketing", name: "StaffMarketing", actions },
      {
        label: "Manager General Affair",
        name: "ManagerGeneralAffair",
        actions,
      },
      { label: "Staff General Affair", name: "StaffGeneralAffair", actions },
      { label: "Modul Purchasing", name: "ModulPurchasing", actions },
      { label: "Manager Purchasing", name: "ManagerPurchasing", actions },
      { label: "Staff Purchasing", name: "StaffPurchasing", actions },
      { label: "Modul Human Resource", name: "ModulHumanResource", actions },
      { label: "Manager HRD", name: "ManagerHRD", actions },
      { label: "Staff HRD", name: "StaffHRD", actions },
      { label: "Manager IT", name: "ManagerIT", actions },
      { label: "Staff IT", name: "StaffIT", actions },
      { label: "Parent", name: "Parent", actions },
    ],
    skipDuplicates: true,
  });

  // * User
  // *************************************
  await prisma.user.createMany({
    data: [
      {
        email: "admin@kr.com",
        password: await bcrypt.hash("admin1234", 10),
        roleId: 1,
        name: "User 1",
      },
      {
        email: "user2@mail.com",
        password: await bcrypt.hash("admin1234", 10),
        roleId: 1,
        name: "User 2",
      },
      {
        email: "user3@mail.com",
        password: await bcrypt.hash("admin1234", 10),
        roleId: 1,
        name: "User 3",
      },
      {
        email: "user4@mail.com",
        password: await bcrypt.hash("admin1234", 10),
        roleId: 1,
        name: "User 4",
      },
      {
        email: "user5@mail.com",
        password: await bcrypt.hash("admin1234", 10),
        roleId: 1,
        name: "User 5",
      },
    ],
    skipDuplicates: true,
  });

  // * Position
  // *************************************
  await prisma.position.createMany({
    data: [
      {
        description: "",
        active: true,
        name: "principal",
        category: "Edu",
        code: "KR/POS/2024/01/0001",
      },
      {
        name: "teacher",
        category: "Edu",
        active: true,
        description: "",
        code: "KR/POS/2024/01/0002",
      },
      {
        name: "security",
        active: true,
        code: "KR/POS/2024/01/0003",
        category: "NonEdu",
        description: "",
      },
      {
        name: "cleaning",
        description: "",
        active: true,
        code: "KR/POS/2024/01/0004",
        category: "NonEdu",
      },
    ],
    skipDuplicates: true,
  });
  const positions = (await prisma.position.findMany()).map((item) => item.id);

  // * Employee
  // *************************************
  const employeeRest = {
    tribe: "",
    positionId: positions[0],
    hireDate: today().format(),
    placeOfBirth: faker.location.city(),
  };
  await prisma.employee.createMany({
    // data: employeeSeed.map((row) => ({
    //   PKWTEnd: today,
    //   positionId: 1,
    //   userId: 1,
    //   ...row,
    //   gender: row.gender,
    // })),
    data: [
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
        // position: {
        //   connect: { id: 1 },
        // },
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
        ...employeeRest,
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
        idAddress:
          "Jl. SPG 7 No.2 Lubang Buaya RT 007/RW 009 Jakarta Timur, 13810",
        houseAddress: "-",
        email: "ramadhan.kidsrepublic@gmail.com",
        phone1: "0812-9741-8454",
        phone2: "021-8408751",
        familyPhone: "08568204348",
        degree: "D3/D4",
        institution: "IISIP",
        major: "Komunikasi",
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
        ...employeeRest,
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
        fatherName: "Alif Hardianto",
        motherName: "Sutarsih",
        siblingName: "Ramzy Nur Fauzan",
        spouseName: "Prade Kunto Arief Dwi Sanjaya",
        childrenName: "Daniyal Zhafran Radefa",
        PKWTStart: dayjs("9/6/2021").format(),
        PKWTEnd: dayjs("9/6/2023").format(),
        contractStatus: "Active",
        ...employeeRest,
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
        contractStatus: "Active",
        ...employeeRest,
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
        PKWTStart: dayjs("10/23/2015").format(),
        PKWTEnd: dayjs("10/23/2017").format(),
        TMT: dayjs("1/8/18").format(),
        contractStatus: "Active",
        ...employeeRest,
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
        contractStatus: "Active",
        ...employeeRest,
      },
    ],

    skipDuplicates: true,
  });

  // * VEndor
  // *************************************
  await prisma.vendor.createMany({
    data: [
      {
        name: "Vendor1",
        code: "KR/SPP/2024/01/00001",
        accountNo: "1111111111",
        address: faker.location.streetAddress(),
        phone: faker.phone.number(),
        fax: faker.phone.number(),
        remarks: "",
        blacklist: false,
      },
    ],
    skipDuplicates: true,
  });

  // * Department
  // *************************************
  await prisma.department.createMany({
    data: [
      {
        code: "TI",
        name: "TI",
        description: "TI",
        active: true,
      },
    ],
    skipDuplicates: true,
  });

  await prisma.uom.createMany({
    data: [
      {
        code: "PEN",
        name: "Pen",
        acronym: "bh",
        description: "",
        active: true,
      },
      {
        code: "KG",
        name: "kg",
        description: "",
        acronym: "kg",
        active: true,
      },
    ],
    skipDuplicates: true,
  });

  // * Inventory
  // *************************************
  await prisma.inventory.createMany({
    data: [
      {
        name: "Cat dinding",
        code: "CAT",
        uomId: 2,
        departmentId: 1,
        remarks: "",
        qty: 110,
        category: "inventory",
      },
      {
        name: "Book",
        code: "BOOK",
        uomId: 1,
        departmentId: 1,
        remarks: "",
        qty: 110,
        category: "inventory",
      },
    ],
    skipDuplicates: true,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
