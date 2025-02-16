import { BAD_REQUEST_ERROR, NETWORK_ERROR, RESSOURCES_FETCHED_SUCCESS } from "@/constants/STATUS_CODE";
import { ApiResponseDto } from "@/dto/api-response.dto";
import { ProductResponseDto } from "@/dto/product-response.dto";
import { createClient } from "@/utils/supabase/server";
import { PostgrestError } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request : NextRequest, { params }: ApiProductsByCategoryParams) {
    try {
        const supabase = await createClient()
        const {category} = await params
        const searchParams = new URL(request.url).searchParams;
        const limit = searchParams.get("limit");
        const parsedCategory = parseInt(category)
        if(!parsedCategory){
            const error = new Error("Category doesn't exist.")
            const errorResponse :ApiResponseDto<Error> = {success: false, message:error.message , data:error}
            return NextResponse.json(errorResponse, { status: BAD_REQUEST_ERROR })
        }
        const {data,error} = await supabase.schema("api").from("products")
        .select("name, description, available,best_product,best_product_priority,description_technical,id,level_support,performance,price,priority,scalability, categories ( id, name ), images (id,image_url)")
        .eq("category_id",parsedCategory )
        .order("available", {ascending: false})
        .limit(limit ? parseInt(limit) : 10)
        if(error){
            const errorResponse :ApiResponseDto<PostgrestError> = {success: false, message: error.message, data: error}
            return NextResponse.json(errorResponse, { status:NETWORK_ERROR })

        }
        const response: ApiResponseDto<ProductResponseDto[]> = {
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