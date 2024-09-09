import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define protected routes as an array
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/conversation(.*)",
  "/image(.*)",
  "/video(.*)",
  "/music(.*)",
  "/code(.*)",
  "/settings(.*)",
  "/api(.*)",
  "/trpc(.*)",
]);

export default clerkMiddleware((auth, req) => {
  const { userId } = auth();

  if (!userId && isProtectedRoute(req)) {
    return auth().redirectToSignIn({ returnBackUrl: req.url });
  }

  if (userId && !isProtectedRoute(req)) {
    const path = "/dashboard";
    return NextResponse.redirect(new URL(path, req.url));
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
