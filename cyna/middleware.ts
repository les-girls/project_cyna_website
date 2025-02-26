import { chain } from "./middlewares/chain";
import { withI18nMiddleware } from "./middlewares/withI18nMiddleware";
import { withSessionMiddleware } from "./middlewares/withSessionMiddleware";
 
export default chain([withSessionMiddleware,withI18nMiddleware])

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    // "/(!api/*)",
    '/(en|fr)/:path*',
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
