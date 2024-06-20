import { FieldUpload } from "@/c";
import { FormChild } from "@/pages/admission/forms/type";
import { Typography } from "antd";
import { DocumentsProps } from "./NonFormalEducation";

function Documents({
  setFilePhoto,
  setFamilyCard,
  setIdCardFather,
  filePhoto,
  idCardFather,
  idCardMother,
  setIdCardMother,
  familyCard,
  birthCertificate,
  setBirthCertificate,
  immunizationCertificate,
  setImmunizationCertificate,
}: DocumentsProps) {
  return (
    <div>
      <br />
      <br />
      <Typography.Title level={5}>Documents</Typography.Title>
      <br />

      <FieldUpload<FormChild>
        fileList={filePhoto}
        setFileList={setFilePhoto}
        label={"photo"}
        type="image"
        name="photo"
      />

      <FieldUpload<FormChild>
        fileList={birthCertificate}
        setFileList={setBirthCertificate}
        label={"Birth Certificate"}
        type="image"
        name="birthCertificate"
      />

      <FieldUpload<FormChild>
        fileList={immunizationCertificate}
        setFileList={setImmunizationCertificate}
        label={"Immunization Certificate"}
        type="image"
        name="immunizationCertificate"
      />

      <FieldUpload<FormChild>
        fileList={familyCard}
        setFileList={setFamilyCard}
        label={"Family Card"}
        type="image"
        name="familyCard"
      />

      <FieldUpload<FormChild>
        fileList={idCardFather}
        setFileList={setIdCardFather}
        label={"Id Card Father"}
        type="image"
        name="idCardFather"
      />
      <FieldUpload<FormChild>
        fileList={idCardMother}
        setFileList={setIdCardMother}
        label={"Id Card Mother"}
        type="image"
        name="idCardMother"
      />
    </div>
  );
}

export default Documents;
