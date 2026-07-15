import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';

  // 1. WWW to Non-WWW Redirect
  if (hostname.startsWith('www.')) {
    const nonWwwHostname = hostname.replace(/^www\./, '');
    url.hostname = nonWwwHostname;
    return NextResponse.redirect(url, 301);
  }

  // 2. Trailing Slash Enforcement (Next.js trailingSlash: true handles most cases, 
  // but middleware can ensure consistency if needed for specific logic)
  // However, since we have 'trailingSlash: true' in next.config.ts, 
  // Next.js automatically handles the redirection to trailing slash versions.

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
