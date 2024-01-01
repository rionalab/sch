import { ZodIssue } from "zod";

/**
 *
 */
export const zodErrorMessage = (issues: ZodIssue[]) => {
  let description = null;

  if (issues.length === 1) {
    const err = issues[0];
    description = `${err.path[0]}: ${err.message}`;
  } else {
    return {
      message: `Notification Andika `,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nostrum harum  cupiditate non. Dignissimos reiciendis consequuntur veritatis rerum quos commodi, aut aliquam maiores quae enim?",
      placement: "bottomLeft",
    } as const;
  }

  return {
    message: "Validation Error",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nostrum harum  cupiditate non. Dignissimos reiciendis consequuntur veritatis rerum quos commodi, aut aliquam maiores quae enim?",
    placement: "bottomLeft",
  } as const;
};
