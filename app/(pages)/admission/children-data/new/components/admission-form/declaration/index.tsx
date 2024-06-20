import { CheckOutlined } from "@ant-design/icons";
import { Button, Col, Form, Row } from "antd";
import { useState } from "react";
import { notifStoreError, notifUpdateError, urls } from "@/consts";
import { useAntdContext } from "@/contexts";
import { error } from "console";
import { getAvailableAdmissionTicket } from "@/pages/admission/action";
import { useRouter } from "next/navigation";
import { submitAdmission } from "../../../action";

interface Props {
  prevStep: () => void;
}

function Declaration({ prevStep }: Props) {
  const [loading, setLoading] = useState(false);
  const { api } = useAntdContext();

  const router = useRouter();

  const submit = async () => {
    try {
      setLoading(true);

      const studentRegistration1 = localStorage.getItem("studentRegistration1");
      const studentRegistration2 = localStorage.getItem("studentRegistration2");
      const studentRegistration3 = localStorage.getItem("studentRegistration3");

      console.log({
        studentRegistration1,
        studentRegistration2,
        studentRegistration3,
      });

      if (
        !studentRegistration1 ||
        !studentRegistration2 ||
        !studentRegistration3
      ) {
        throw new Error("Please make sure you fill form accordingly");
      }

      const userId = localStorage.getItem("auth");
      const tickets = await getAvailableAdmissionTicket(Number(userId));

      console.log(tickets);

      const x = tickets.find((t) => !t.isUsed);

      if (!x) {
        api?.error(notifStoreError("Ticket not found", "Save Error"));
        router.push(urls.admission.childrenData);
        return;
      }

      const data = {
        data: JSON.stringify({
          studentRegistration1,
          studentRegistration2,
          studentRegistration3,
        }),
        status: "New",
        progress: "New",
        method: "Online",
        userId: Number(userId),
        paymentCode: x.code,
      };

      await submitAdmission(data, x.id);

      localStorage.removeItem("studentRegistration1");
      localStorage.removeItem("studentRegistration2");
      localStorage.removeItem("studentRegistration3");

      router.push(urls.admission.registrationSuccess);
    } catch (e: any) {
      const msg = String(e.message);
      api?.error(notifStoreError(msg));
      setLoading(false);
    }
  };

  return (
    <div className="post">
      <br />
      <h3>Terms and condition</h3>
      <p>
        I have received and read Kids Republic School Policy and Regulation, and
        I agree to abide by the terms and conditions.
      </p>
      <ol>
        <li>School Policy and Regulation on Academic Matters</li>
        <ul>
          <li>
            Parents choose to enroll students at Kids Republic School at their
            own choice.
          </li>
          <li>
            Willing to follow and comply with applicable regulations at Kids
            Republic School for both parents and students.
          </li>
          <li>
            Willing to cooperate with the school in developing the potential of
            students both in the academic and non-academic fields.
          </li>
          <li>
            Trust the school to organize teaching and learning processes such
            as: curriculum, class and homeroom placement, class schedules and
            school-speci c activities as well encourage children to study
            diligently and obey school rules.
          </li>
          <li>Not intervening in the school assessment and grading system.</li>
          <li>
            Students who need extra help and support in school may be eligible
            for special education services in the form of an individualized
            education program (IEP)
          </li>
          <li>
            Parents should work with educators to develop a plan that helps kids
            succeed in school
          </li>
          <li>
            The referral process begins when a teacher or parent is concerned
            that a child may have trouble in the classroom, and the teacher noti
            es the school counselor or psychologist.
          </li>
          <li>
            Parents should provide any documents related to your child special
            education program.
          </li>
        </ul>
        <li>School Policy and Regulation on Payment</li>
        <ul>
          <li>
            All fees paid to the school are non-refundable, non-transferable and
            non-negotiable.
          </li>
          <li>
            Willing to ful ll all Admission fee obligations, Annual development
            fees and July tuition fee according to the provisions.
          </li>
          <li>
            Willing to pay tuition fees on time from 1 to 10 every month,
            provided that:
          </li>
          <ul>
            <li>Late payment, an administrative fee of Rp. 50,000</li>
            <li>
              If there are obligations that have not been resolved at the end of
              the mid semester, semester or end of academic year, the School /
              Foundation will hold the Report on Student Development Results
            </li>
            <li>
              Postponement of payments for 3 consecutive months for no apparent
              reason, is considered resigning from school.
            </li>
          </ul>
          <li>
            If you choose to continue study in Kids Republic School, you must ll
            the re-enrolment form and willing to pay the Annual development fee
            yearly in the middle of the even semester, as a condition for
            re-registration of students in the following school year. If it is
            not repaid, student will be considered to resign in the next school
            year.
          </li>
          <li>
            Willing to pay for school fees due to school holidays and closure as
            directed by the government or authorities and that there will be no
            compensation.
          </li>
        </ul>
        <li>School Policy and Regulation on Students Safety</li>
        <ul>
          <li>
            At Kids Republic, we take every measure to ensure the safety of your
            child. However, in the unlikely event of an accident, the school
            will not be held liable for any injury. First Aid facilities are
            available and will be administered unless speci cally advised
            against.
          </li>
          <li>
            I hereby release, indemnify and hold harmless against the school for
            any accident that may occur to my child while he/she is at Kids
            Republic School
          </li>

          <li>
            Permission is hereby granted to the centre to seek medical or
            hospital attention for my child in the event of any emergency when
            it is not possible to contact me. In such an event, I shall be
            responsible for all the expenses incurred (eg. transport, medical
            fees and administrative costs)
          </li>
          <li>
            In the event of an accident or emergency, I hereby authorize my
            child/s to be transported to the nearest hospital for medical
            treatment. I hereby agree to individually provide for all medical
            expenses, which may be incurred by myself, or my child/s as a result
            of an injury sustained while participating at or for the School.
          </li>
          <li>
            I will inform the school admin o ce immediately if my address or any
            contact number changes or if there are any changes to family
            circumstances that the school should be aware of which a ect the
            student’s safety and wellbeing.
          </li>
        </ul>
        <li>School Policy and Regulation on Publicity</li>
        <ul>
          <li>
            I agree/disagree to provide permission for photographic, video,
            audio or any other form of electronic recording of the named student
            to be used by the Kids Republic. I acknowledge and agree that
            ownership of any photographic, video, audio or any other form
            electronic recording will be retained by the Kids Republic.
          </li>
          <li>
            I authorize the use or reproduction of any recording referred to
            above for any reasonable purpose within the discretion of Kids
            Republic without further acknowledgment and without being entitled
            to remuneration or compensation. I understand and agree that if I
            wish to withdraw this authorization, it will be my responsibility to
            inform the Kids Republic via written communication addressed to the
            Principal.
          </li>
          <li>
            Participate in maintaining the good name and reputation of Kids
            Republic School. Including the use of social media and other forms
            of publicity.
          </li>
        </ul>
        <li>School Policy and Regulation on School-Parents Correspondence :</li>
        <ul>
          <li>
            I will follow the school policy and regulation on communication
            stated in the parents declaration form.
          </li>
          <li>
            I understand that class teachers and the school may use mass
            e-mailing to correspond with parents on a regular basis pertaining
            to classroom activities. I hereby o er my consent to have my e-mail
            address included in the mass-emailing list.
          </li>
          <li>
            I understand that the school (teachers and sta ) will only use
            school formal communication tools to correspondent with the parents
            (school’s email, letters, and school’s o cial phone number), and
            will not communicate with the teachers and sta s regarding the
            school matters through private communication tools.
          </li>
          <li>
            Willing to attend to attend Parents Teacher Meeting (PTM) or discuss
            with teachers regarding issues in child development if needed
          </li>
        </ul>
      </ol>

      <p>I hereby agree to :</p>
      <ul>
        <li>
          Willing to accept the consequences of actions that con ict with the
          conditions agreed to by the school and parents.
        </li>
        <li>
          If there is a problem between the two parties, the two sides resolve
          in a family manner. Thus we sign this statement, with the ability to
          ful l and accept all the consequences according to the provisions set
          by Kids Republic school under the care of Yayasan Batin Cahaya Bangsa.
        </li>
      </ul>

      <br />
      <br />
      <Row gutter={24}>
        <Col span={21}>
          <Form.Item wrapperCol={{ offset: 4 }}>
            <Button
              onClick={() => {
                prevStep();
              }}
              style={{ marginRight: 8 }}
              disabled={loading}
              htmlType="button"
            >
              Back
            </Button>

            <Button
              icon={<CheckOutlined />}
              disabled={loading}
              loading={loading}
              type="primary"
              style={{ paddingLeft: 50, paddingRight: 50 }}
              htmlType="submit"
              onClick={submit}
            >
              {!loading ? "Agree & Continue" : "Sending Admission..."}
            </Button>
          </Form.Item>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}

export default Declaration;
