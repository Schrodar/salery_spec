// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest, res: NextResponse) {
  console.log("in middleware");
  console.log(req.nextUrl.pathname);
}

// See "Matching Paths" below to learn more

export const config = {
  matcher: "/api/:function*",
};
