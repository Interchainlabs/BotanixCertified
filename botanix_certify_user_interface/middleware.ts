import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { JWT, getToken } from 'next-auth/jwt';

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req: NextRequest) {
  const token = (await getToken({ req, secret })) as JWT | null;
  const PATH_NAME = req.nextUrl.pathname;

  // Redirects user to login page if token does not exist
  if (!token && PATH_NAME.startsWith('/profile')) {
    return NextResponse.redirect(new URL(`/auth/sign-in`, req.url));
  }

  // Hides authentication pages if token does not exist
  if (token && PATH_NAME.endsWith('sign-in')) {
    const redirectURL = shouldRedirectToProfile(token) ? 'profile/account' : 'auth/connect-wallet';
    return NextResponse.redirect(new URL(`/${redirectURL}`, req.url));
  }

  return NextResponse.next();
}

function shouldRedirectToProfile(token: JWT) {
  return !!token.wallet_address && token.email;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/auth/:path*', '/profile/:path*'],
};
