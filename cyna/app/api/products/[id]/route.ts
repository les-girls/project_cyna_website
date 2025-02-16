import { BAD_REQUEST_ERROR, NETWORK_ERROR, RESSOURCES_FETCHED_SUCCESS } from "@/constants/STATUS_CODE";
import { ApiResponseDto } from "@/dto/api-response.dto";
import { ProductResponseDto } from "@/dto/product-response.dto";
import { createClient } from "@/utils/supabase/server";
import { PostgrestError } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request : NextRequest, { params }: ProductDetailProps) {
    try {
        const supabase = await createClient()
        const {id} = await params
        const parsedId = parseInt(id)
        if(!parsedId){
            const error = new Error("Product doesn't exist.")
            const errorResponse :ApiResponseDto<Error> = {success: false, message:error.message , data:error}
            return NextResponse.json(errorResponse, { status: BAD_REQUEST_ERROR })
        }
        const {data,error} = await supabase.schema("api").from("products").select("name, description, available,best_product,best_product_priority,description_technical,id,level_support,performance,price,priority,scalability, categories ( id, name, stock ), images (id,image_url), promotions (discount_value, discount_type, description)").eq("id",parsedId ).maybeSingle()
        if(error){
            const errorResponse :ApiResponseDto<PostgrestError> = {success: false, message: error.message, data: error}
            return NextResponse.json(errorResponse, { status:NETWORK_ERROR })
        }

        const response: ApiResponseDto<ProductResponseDto | null> = {
            success: true,
            message: "Products fetched successfully",
            data: data,
        };
        return NextResponse.json(response,{status:RESSOURCES_FETCHED_SUCCESS})

    } catch (error) {
        const errorResponse :ApiResponseDto<unknown> = {success: false, message: 'Internal Server Error', data: error}
        return NextResponse.json(errorResponse, { status: NETWORK_ERROR })
    }
}