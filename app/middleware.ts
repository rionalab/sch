import { type NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const isAuth = false;

  console.log(123);

  if (!isAuth) {
    return NextResponse.redirect("/login");
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/account"],
};
