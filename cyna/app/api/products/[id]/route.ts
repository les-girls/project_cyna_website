import { BAD_REQUEST_ERROR, NETWORK_ERROR, RESSOURCES_FETCHED_SUCCESS } from "@/constants/STATUS_CODE";
import { ApiResponseDto } from "@/dto/api-response.dto";
import { ProductResponseDto } from "@/dto/product-response.dto";
import { createClient } from "@/utils/supabase/server";
import { translateText } from "@/utils/api/translate";
import { PostgrestError } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";
import { LANGAGE_DB } from "@/constants/GLOBAL";


export async function GET(request : NextRequest, { params }: ProductDetailProps) {
    try {
        const supabase = await createClient()
        const {id} = await params
        const parsedId = parseInt(id)
        const acceptLanguage = request.headers.get("accept-language") || "en"
        
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
        let dataTranslated = data
        if(data){
            const name = await translateText(data?.name, LANGAGE_DB, acceptLanguage)
            const description = await translateText(data?.description, LANGAGE_DB, acceptLanguage)
            const description_technical = await translateText(data?.description_technical, LANGAGE_DB, acceptLanguage)
            const level_support = await translateText(data?.level_support, LANGAGE_DB, acceptLanguage)
            const scalability = await translateText(data?.scalability, LANGAGE_DB, acceptLanguage)
            const performance = await translateText(data?.performance, LANGAGE_DB, acceptLanguage)
            dataTranslated = {...data, scalability, performance, level_support, description, description_technical, name}
            if(data.categories){
                const category = await translateText(data?.categories?.name, LANGAGE_DB, acceptLanguage)
                dataTranslated.categories = {...data.categories, name : category}
            }
    
        }
       
        const response: ApiResponseDto<ProductResponseDto | null> = {
            success: true,
            message: "Products fetched successfully",
            data: dataTranslated,
        };
        
        return NextResponse.json(response,{status:RESSOURCES_FETCHED_SUCCESS})

    } catch (error) {
        const errorResponse :ApiResponseDto<unknown> = {success: false, message: 'Internal Server Error', data: error}
        return NextResponse.json(errorResponse, { status: NETWORK_ERROR })
    }
}