import { uploadFile } from "@/actions/file";
import { formToPrisma } from "@/libs/helpers";
import { type FormFields } from "../../type";

export async function submitEmployeeData(dirtyValue: FormFields) {
  const { PKWT, oldPhoto, ...rest } = dirtyValue;
  let photo = oldPhoto;

  if (rest.photo) {
    const data = new FormData();
    data.append("file", rest.photo as unknown as File);

    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    photo = (await uploadFile({ data, dir: "images" }))?.fileName ?? "";
  }

  const transformed = {
    ...rest,
    photo,
    PKWTStart: PKWT?.[0],
    PKWTEnd: PKWT?.[1],
  };

  return formToPrisma(transformed);
}
