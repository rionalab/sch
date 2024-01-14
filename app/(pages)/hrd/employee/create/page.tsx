import React from "react";

function Page() {
  return (
    <div>
      Crate empplouyeee id Int @id @default(autoincrement()) firstName String
      lastName String religion Religion photo String bloodType String email
      String @unique phone1 String phone2 String familyPhone String address
      String zipCode String tribe String remarks String gender Gender hireDate
      DateTime dob DateTime placeOfBirth String positionId Int position Position
      @relation(fields: [positionId], references: [id]) createdAt DateTime
      @default(now()) updatedAt DateTime @updatedAt user User @relation(fields:
      [userId], references: [id]) userId Int @unique
    </div>
  );
}

export default Page;
