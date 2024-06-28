import { Resend } from "resend";
import * as React from "react";
import {
  EmailTemplate1,
  emailAssessmentTemplate,
  emailInterviewTemplate,
  emailPaymentTemplate,
} from "./template1";
import { DEV_EMAIL } from "@/app/_configs/app";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const res = await request.json();
    let subject = "Kids Republic";
    let x = EmailTemplate1({ firstName: "John Doe" });

    console.log(res);

    if (res.type === "Assessment") {
      x = emailAssessmentTemplate(res);
      subject = "Invitation to Admission Assessment Test";
    } else if (
      res.type.toLowerCase() === "pass" ||
      res.type.toLowerCase() === "passwithnote"
    ) {
      x = emailInterviewTemplate(res);
      subject = "Announcement and Interview Invitation for New Admission";
    } else if (res.type.toLowerCase() === "payment") {
      x = emailPaymentTemplate(res);
      subject = "Next Steps for Your Child's Admission: Payment Information";
    }

    const to = res?.emails?.split(",").map((row: any) => row.trim());

    const isLocalhost = process.env.NODE_ENV === "development";

    const { data, error } = await resend.emails.send({
      // from: "Kids Republic <no-reply@kidsrepublic.sch.id>",
      from: "No-Reply Kids Republic <onboarding@resend.dev>",
      // to: ["rionalab@gmail.com", "rickyorlandonapitupulu@gmail.com"],
      // to: res.emails.split(","),
      to: isLocalhost ? [DEV_EMAIL] : to,
      subject,
      react: x as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function GET() {
  try {
    const data = process.env.RESEND_API_KEY;
    return Response.json({ data });
  } catch (e) {
    return Response.json({ e }, { status: 500 });
  }
}
