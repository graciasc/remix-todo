import { createCookieSessionStorage } from "@remix-run/node"; // or cloudflare/deno

interface SessionData {
  counter: number;
}

interface SessionFlashData {
  error: string;
}

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage<SessionData, SessionFlashData>({
    // a Cookie from `createCookie` or the CookieOptions to create one
    cookie: {
      name: "__session",

      // all of these are optional
      // domain: "remix.run",
      // Expires can also be set (although maxAge overrides it when used in combination).
      // Note that this method is NOT recommended as `new Date` creates only one date on each server deployment, not a dynamic date in the future!
      //
      // expires: new Date(Date.now() + 60_000),
      httpOnly: true,
      maxAge: 60,
      path: "/",
      sameSite: "lax",
      secrets: ["s3cret1"],
      secure: true,
    },
  });

export { getSession, commitSession, destroySession };

// import invariant from "tiny-invariant";
//
// import type { User } from "~/models/user.server";
// import { getUserById } from "~/models/user.server";
//
// invariant(process.env.SESSION_SECRET, "SESSION_SECRET must be set");
//
// export const sessionStorage = createCookieSessionStorage({
//   cookie: {
//     name: "__session",
//     httpOnly: true,
//     path: "/",
//     sameSite: "lax",
//     secrets: [process.env.SESSION_SECRET],
//     secure: process.env.NODE_ENV === "production",
//   },
// });
//
// const USER_SESSION_KEY = "userId";
//
// export async function getSession(request: Request) {
//   const cookie = request.headers.get("Cookie");
//   return sessionStorage.getSession(cookie);
// }
//
// export async function getUserId(
//   request: Request,
// ): Promise<User["id"] | undefined> {
//   const session = await getSession(request);
//   const userId = session.get(USER_SESSION_KEY);
//   return userId;
// }
//
// export async function getUser(request: Request) {
//   const userId = await getUserId(request);
//   if (userId === undefined) return null;
//
//   const user = await getUserById(userId);
//   if (user) return user;
//
//   throw await logout(request);
// }
//
// export async function requireUserId(
//   request: Request,
//   redirectTo: string = new URL(request.url).pathname,
// ) {
//   const userId = await getUserId(request);
//   if (!userId) {
//     const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
//     throw redirect(`/login?${searchParams}`);
//   }
//   return userId;
// }
//
// export async function requireUser(request: Request) {
//   const userId = await requireUserId(request);
//
//   const user = await getUserById(userId);
//   if (user) return user;
//
//   throw await logout(request);
// }
//
// export async function createUserSession({
//   request,
//   userId,
//   remember,
//   redirectTo,
// }: {
//   request: Request;
//   userId: string;
//   remember: boolean;
//   redirectTo: string;
// }) {
//   const session = await getSession(request);
//   session.set(USER_SESSION_KEY, userId);
//   return redirect(redirectTo, {
//     headers: {
//       "Set-Cookie": await sessionStorage.commitSession(session, {
//         maxAge: remember
//           ? 60 * 60 * 24 * 7 // 7 days
//           : undefined,
//       }),
//     },
//   });
// }
//
// export async function logout(request: Request) {
//   const session = await getSession(request);
//   return redirect("/", {
//     headers: {
//       "Set-Cookie": await sessionStorage.destroySession(session),
//     },
//   });
// }
