import { NextFetchEvent, NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";
import { CustomMiddleware } from "@/types/middleware.types";
export function withSessionMiddleware(middleware: CustomMiddleware) {
    return async (
        request: NextRequest,
        event: NextFetchEvent,
        response: NextResponse
        ) => { 
        await updateSession(request);
        return middleware(request, event, response);
    }
}

 