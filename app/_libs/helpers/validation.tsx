"use client";

import { type GeneralError } from "@/types";
import { type ZodIssue } from "zod";

export function isArrayOfZodIssue(arr: any[]): arr is ZodIssue[] {
  return arr.every((item) => "path" in item);
}

export function isGeneralError(obj: Record<string, any>): obj is GeneralError {
  return "message" in obj;
}

type ValidationType = ["required" | "others"];

export function fieldRules(validationType: ValidationType, label?: string) {
  const result = [];

  if (validationType.includes("required")) {
    result.push({
      required: true,
      message: "This input is required",
    });
  }

  return result;
}
