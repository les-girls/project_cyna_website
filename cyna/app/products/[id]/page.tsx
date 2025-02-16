import CardPrice from "@/components/DetailsComponent/CardPrice";
import Divider from "@/components/Divider";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { redirect } from "next/navigation";
import CardImage from "@/components/DetailsComponent/CardImage";
import ImagesGrid from "@/components/DetailsComponent/ImagesGrid";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default async function ProductDetails({params }: ProductDetailProps) {
    try {
        const searchParams = await params;
        const product = await fetch(`http://localhost:3000/api/products/${searchParams.id}`)
        const response : Api<Products> = await product.json()
        if(!response.data || Object.keys(response.data).length ===0){
            throw new Error()
        }
        const request = await fetch(`http://localhost:3000/api/products/category/${response.data.categories?.id}?limit=6`)
        const {data} :Api<Products[]> = await request.json()
        const responseSubscriptions = await fetch(`http://localhost:3000/api/subscriptions`)
        const subscriptions :Api<Subscriptions[]> = await responseSubscriptions.json()
        
        return <div>
            <div  className={`w-full grid grid-cols-1 md:grid-cols-2`}>
                <ImagesGrid images={response.data.images}  />
                <div className="bg-baniere text-white h-full w-full flex flex-col justify-center items-start px-5 relative">
                    <div  className="absolute right-0 top-0 flex">
                        <Badge className={`${response.data.available ? "bg-green-600":"bg-red-500"} p-2`}>{response.data.available ? "Disponible immédiatement" : "Service momentanément indisponible"}</Badge>
                        {response.data.best_product && <div className="p-2 px-5 bg-purple-dark mr-4 mt-4 rounded-xl">Best product</div>}
                    </div>
                    <h4 className="opacity-70">/ {response.data.categories?.name}</h4>
                    <h1>{response.data.name}</h1>
                    <h3>{response.data.description}</h3>
                    <button disabled={!response.data.available}  className={`p-2 px-5 cursor-pointer ${response.data.available ? "bg-green-600":"bg-red-500 opacity-50"} mr-4 mt-4 rounded-xl`}>
                        <Link href={"#product-price"} className={!response.data.available ? 'pointer-events-none' : ''} 
                                aria-disabled={!response.data.available} 
                                tabIndex={!response.data.available ? -1 : undefined}>
                            {response.data.available ? "S'ABONNER MAINTENANT" : "SERVICE INDISPONIBLE"}
                        </Link>
                    </button>
                </div>
            </div>
            <div className="h-2/4 w-full bg-purple-dark py-5 text-xl text-white text-center">Description du produit</div>
            <div className="ml-2 pt-2 flex flex-col gap-2">
                <h2>Caractéristiques techniques</h2>
                <Divider orientation="horizontal" width="50%"  />
                <div className="px-4">
                    <li><span className="font-bold">Description : </span>{response.data.description_technical}</li>
                    <li><span className="font-bold">Scalabilité :</span> {response.data.scalability}</li>
                    <li><span className="font-bold">Niveau de support :</span> {response.data.level_support}</li>
                    <li><span className="font-bold">Performance : </span>{response.data.performance}</li>
                </div>
            </div>
            <div className="ml-2 pt-2 max-w-full overflow-auto">
                <h2>Tarifs</h2>
                <Divider orientation="horizontal" width="50%"  />
                <ScrollArea>
                    <div id="product-price" className="p-4 flex items-center gap-5 justify-start">
                        <CardPrice disabled={!response.data.available}  subscription={{name:"Prix unitaire", price: response.data.price, promotions:response.data.promotions }}  />
                        {subscriptions.data.map((subscription, index) =>{
                            return <CardPrice disabled={!response.data.available} subscription={subscription}  key={index}/>
                        })}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>
            <div className="flex flex-col items-start justify-center px-4 gap-2 py-5">
                <h2>Autres solutions</h2>
                <Divider orientation="horizontal" width="50%"  />
                <ScrollArea className='max-w-full'>
                    <div className=' flex gap-4'>
                        {Array.isArray(data) && data.map((product, index) => {
                                return <CardImage key={index} id={product.id} name={product.name} image={product.images[0]}  />
                            }
                        )}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>
        </div>
        
    } catch (error) {
        redirect("/not-found")
    }
}

