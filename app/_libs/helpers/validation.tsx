import { messages } from "@/consts";
import { GeneralError } from "@/types";
import { ZodIssue } from "zod";

export function isArrayOfZodIssue(arr: any[]): arr is ZodIssue[] {
  return arr.every((item) => "path" in item);
}

export function isGeneralError(obj: Record<string, any>): obj is GeneralError {
  return "message" in obj;
}

type ValidationType = ["required" | "asd"];

export const fieldRules = (validationType: ValidationType, label?: string) => {
  const result = [];

  if (validationType.includes("required")) {
    result.push({ required: true, mmessage: messages.fieldIsRequired(label) });
  }

  return result;
};
