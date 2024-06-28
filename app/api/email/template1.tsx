import { APP_NAME, CONTACT_CS } from "@/app/_configs/app";
import { HMA, dMY, dMYtoDayJs } from "@/libs/helpers";
import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate1: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
);

const EmailFooter = () => {
  return (
    <p>
      Best regards,
      <br />
      {APP_NAME}
      <br />
      {CONTACT_CS}
    </p>
  );
};

export const emailAssessmentTemplate = (props: any) => {
  // console.log(777, props);
  // {
  //   unit: 'Preschool',
  //   emails: 'rickyorlandonapitupulu@gmail.com, rionalab@gmail.com',
  //   date: '2024-06-23T01:17:29.200Z',
  //   time: '2024-06-23T02:00:00.000Z',
  //   location: 'Kids Republic School',
  //   type: 'assesment'
  // }

  const test =
    props.unit === "Preschool"
      ? "Proses Trial, Proses Student Assessment Test"
      : "Proses Student Assessment Test";

  return (
    <div>
      <p>Dear parent,</p>

      <p>
        We are pleased to inform you that your child has been shortlisted for
        the next step in our admission process at {APP_NAME}. We would like to
        invite your child to participate in our upcoming Admission Assessment
        Test.
        <br />
        This test is an important part of our evaluation process and will help
        us understand their academic abilities and potential.
      </p>

      <p>
        Details of the Assessment
        <br />
        Test (Onsite): {test}
        <br />
        Date: {dMY(props.date)}
        <br />
        Time: {HMA(props.time)} WIB
        <br />
        Location: {props.location}
      </p>

      <p>
        If you have any questions or need further information, please do not
        hesitate to contact our admissions office at {CONTACT_CS}. We look
        forward to welcoming your children and wish them the best of luck in the
        assessment.
      </p>

      <p>
        Thank you for considering {APP_NAME} for your children's education. We
        are excited about the opportunity to support their academic journey.
      </p>

      <EmailFooter />
    </div>
  );
};

export const emailInterviewTemplate = (props: any) => {
  return (
    <div>
      <p>Dear parent,</p>

      <p>
        We are delighted to inform you that your child has been shortlisted for
        an interview for admission to {APP_NAME}.<br />
        During the interview, both parties will review the terms and sign the
        agreement.
      </p>

      <p>
        Interview Details:
        <br />
        Assessment Result:{" "}
        {props.result === "PassWithNote" ? "Pass with Note" : "Pass"}
        <br />
        Date: {dMY(props.date)}
        <br />
        Time: {HMA(props.time)} WIB
        <br />
        Location: {props.location}
      </p>

      <p>
        If you have any questions or need further clarification, please do not
        hesitate to contact us at {CONTACT_CS}.
        <br />
        Thank you for considering {APP_NAME} for your children's education. We
        are excited about the opportunity to support their academic journey.
      </p>

      <EmailFooter />
    </div>
  );
};

export const emailPaymentTemplate = ({ emails, unit, Remarks, type }: any) => {
  return (
    <div>
      <p>Dear Parent,</p>
      <p>
        We are pleased to inform you that your child has successfully passed the
        assessment and interview for admission to our {unit}
        program.
      </p>
      <p>
        We look forward to welcoming your child to our school community. To
        complete the admission process, we kindly request you to proceed with
        the payment as per the details below:
      </p>
      {unit !== "Preschool" ? (
        <p>
          <b> For Kindergarten Admissions:</b> <br />
          Payment Deadline: 10 days from the date of this email.
          <br />
          Payment Options: Full Payment, Installments of 2 or 3
        </p>
      ) : (
        <p>
          For Pre-School Admissions:
          <br />
          Payment Deadline: 5 days from the date of this email. <br />
          Payment Options: Full Payment
        </p>
      )}

      {/* <p>
        Please make the payment to the following account details:
        <br />
        Bank Name: [Bank Name]
        <br />
        Account Number: [Account Number]
        <br />
        Account Name: [Account Name]
      </p> */}
      <p>
        After making the payment, kindly send a copy of the payment receipt to
        {CONTACT_CS} for confirmation. Should you have any questions or need
        assistance with the payment process, please do not hesitate to contact
        us at {CONTACT_CS}
      </p>
      <p>
        We are excited to have your child join our school and look forward to a
        wonderful educational journey together.
      </p>
      <EmailFooter />
    </div>
  );
};
