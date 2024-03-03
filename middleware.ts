export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard",
    "/master/:module*",
    "/hrd/:module*",
    "/staff/:module*",
    "/account/:module*",
  ],
};
