"use client";

import type { GeneralError } from "@/types";
import type { Rule } from "antd/es/form";
import type { ZodIssue } from "zod";

export function isArrayOfZodIssue(arr: any[]): arr is ZodIssue[] {
  return arr.every((item) => "path" in item);
}

export function isGeneralError(obj: Record<string, any>): obj is GeneralError {
  return "message" in obj;
}

type ValidationType = "required" | "others" | "email" | "min:8";

// Custom validation rule to check for whitespace input
const noWhitespaceInput = async (rule: any, value: any, callback: any) => {
  if (value && String(value).trim() === "") {
    // eslint-disable-next-line prefer-promise-reject-errors
    return await Promise.reject("Input cannot be only whitespace");
  } else {
    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    return await Promise.resolve();
  }
};

export function fieldRules(
  validationType: ValidationType[],
  label?: string,
): Rule[] {
  const result = [];

  if (validationType.includes("required")) {
    result.push({
      required: true,
      message: "This input is required",
    });

    result.push({ validator: noWhitespaceInput });
  }

  if (validationType.includes("email")) {
    result.push({
      type: "email",
    });
  }

  validationType.forEach((validationType) => {
    if (validationType.includes("min")) {
      const length = validationType.split(":")?.[1];

      result.push({
        min: Number(length || 0),
      });
    }
  });

  return result as Rule[];
}
