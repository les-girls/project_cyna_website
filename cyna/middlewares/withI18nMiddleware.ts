import { NextFetchEvent, NextResponse, type NextRequest } from "next/server";
import { CustomMiddleware } from "@/types/middleware.types";
import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";
const locales = ['fr', 'en'];
const defaultLocale = 'fr';

function getLocale(request: { headers: { get: (arg0: string) => any; }; }) {
  const headers = { "accept-language": request.headers.get("accept-language") };
  const languages = new Negotiator({ headers }).languages();

  return match(languages, locales, defaultLocale);
}

//passer au prochain middlewarre
export function withI18nMiddleware(middleware: CustomMiddleware) {
    return async (
        req: NextRequest,
        event: NextFetchEvent,
        response: NextResponse
        ) => { 
        //    export function middleware(req: NextRequest) {
             const { pathname } = req.nextUrl;
             const preferedLocale = getLocale(req)
             const pathSegments = pathname.split("/").filter(Boolean); 
             const locale = pathSegments[0]; 
           
             if (!locales.includes(locale)) {
               return NextResponse.redirect(new URL(`/${preferedLocale}${pathname}`, req.url));
             }
             const pathWithoutLocale = `/${pathSegments.slice(1).join("/")}`
             const validStaticRoutes = ["/products", "/"];
             if(validStaticRoutes.some(route=>route === pathWithoutLocale )){
               return NextResponse.next();
             }
           
             const validSDynamicRoutes = [`^/products/[0-9]+$`];
             if(validSDynamicRoutes.some(route =>new RegExp(route).test(pathWithoutLocale) )){
               return NextResponse.next();
             }
            return NextResponse.rewrite(new URL(`/${locale}/not-found`, req.url));
            //  return middleware(req, event, response)
             //    }
        // return middleware(req, event, response);
    }
}

 