import { NETWORK_ERROR, RESSOURCES_FETCHED_SUCCESS } from "@/constants/STATUS_CODE";
import { ApiResponseDto } from "@/dto/api-response.dto";
import { SubscriptionsResponseDto } from "@/dto/subscription-response.dto";
import { createClient } from "@/utils/supabase/server";
import { PostgrestError } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request : NextRequest) {
    try {
        const supabase = await createClient()
        const {data,error} = await supabase.schema("api").from("subscriptions")
        .select("name, price, promotions (discount_value, discount_type, description)")
        
        if(error){
            const errorResponse :ApiResponseDto<PostgrestError> = {success: false, message: error.message, data: error}
            return NextResponse.json(errorResponse, { status:NETWORK_ERROR })
            
        }
        const response: ApiResponseDto<SubscriptionsResponseDto[]> = {
            success: true,
            message: "Subscriptions fetched successfully",
            data: data,
        };
        return NextResponse.json(response,{status:RESSOURCES_FETCHED_SUCCESS})

    } catch (error) {
        const errorResponse :ApiResponseDto<unknown> = {success: false, message: 'Internal Server Error', data: error}
        return NextResponse.json(errorResponse, { status: NETWORK_ERROR })
    }
}