import { APP_NAME, CONTACT_CS } from "../_configs/app";

interface Params {
  parentName?: string;
  time?: string;
  location?: string;
  date?: string;
}

export const emailInterviewTemplate = ({
  parentName,
  date,
  time,
  location,
}: Params) => {
  const _parentName = parentName || `[Parent's Name]`;
  const _date = date || `[Insert Date]`;
  const _time = time || `[Insert Time]`;
  const _location = location || `[Insert Location]`;

  return `Subject: Invitation to Interview for Admission
 
Dear ${_parentName},
  
We are delighted to inform you that your application for admission to ${APP_NAME} has been received and reviewed with great interest. We appreciate your interest in our school and are excited about the possibility of welcoming your child into our educational community.
  
As the next step in the admission process, we would like to invite you to an interview session. This interview serves as an opportunity for us to get to know you and your child better, as well as to discuss our educational philosophy, curriculum, and how we can best support your child's academic and personal development.
  
Interview Details:
  
Date: ${_date}
Time: ${_time}
Location: ${_location}

Please confirm your attendance by replying to this email or contacting our admissions office at ${CONTACT_CS}. If the provided date and time are not suitable, please let us know, and we will do our best to accommodate your schedule.
  
Verification Requirements:
As part of our admissions process, we kindly request the following documents for verification purposes:
  
  1. Completed application form
  2. Child's birth certificate
  3. Immunization records
  4. Parent/guardian identification (e.g., driver's license, passport)
  
 
Please ensure that you bring these documents with you to the interview session. If you have any questions or require further assistance, please do not hesitate to contact us.
  
We look forward to meeting you and discussing how [School Name] can provide a nurturing and enriching educational experience for your child.
  
Warm regards,
  
${APP_NAME}
${CONTACT_CS}
  `;
};
