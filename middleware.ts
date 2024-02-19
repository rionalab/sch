export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/master/:module*", "/hrd/:module*", "/staff/:module*"],
};
