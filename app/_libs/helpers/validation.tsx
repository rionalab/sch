import { GeneralError } from "@/types/request";
import { ZodIssue } from "zod";

export function isArrayOfZodIssue(arr: any[]): arr is ZodIssue[] {
  return arr.every((item) => "path" in item);
}

export function isGeneralError(obj: Record<string, any>): obj is GeneralError {
  return "message" in obj;
}
