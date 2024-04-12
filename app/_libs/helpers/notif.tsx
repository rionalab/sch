import { messages } from "@/consts";
import { type GeneralError } from "@/types";
import { type ZodIssue } from "zod";
import { isArrayOfZodIssue, isGeneralError } from "./validation";

export const notifErrorMessage = (
  data: ZodIssue[] | GeneralError | undefined,
) => {
  let description = null;

  if (Array.isArray(data) && !!data.length && isArrayOfZodIssue(data)) {
    if (data.length === 1) {
      const err = data[0];
      description = (
        <>
          <span className="textCapitalize textBold500">{err.path[0]}:</span>{" "}
          {err.message}
        </>
      );
    } else {
      description = (
        <ul>
          {data.map((issue, i) => (
            <li key={i}>
              <span className="textCapitalize textBold500">
                {issue.path[0]}:
              </span>{" "}
              {issue.message}
            </li>
          ))}
        </ul>
      );
    }

    return {
      message: messages.dataIsInvalid,
      description,
      placement: "bottomLeft",
    } as const;
  } else if (typeof data === "object" && isGeneralError(data)) {
    return {
      message: data.title ?? messages.somethingWentWrong,
      description: data.message,
      placement: "bottomLeft",
    } as const;
  }

  return {
    message: messages.somethingWentWrong,
    description: messages.retryLater,
    placement: "bottomLeft",
  } as const;
};
