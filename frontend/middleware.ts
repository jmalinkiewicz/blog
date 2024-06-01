import { NextRequest, NextResponse } from "next/server";

const isLoggedIn: boolean = false;

export function middleware(request: NextRequest) {
  let cookie = request.cookies.get("token");

  if (!cookie) {
    return NextResponse.redirect(new URL("http://localhost:3000/login"));
  }

  if (request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("http://localhost:3000/dashboard"));
  }
}

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*", "/login"],
};
