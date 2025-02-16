import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import React from 'react'
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

function CardPrice({subscription, disabled}:CardPriceProps) {
    const promotions = subscription.promotions
    let price = subscription.price
    if(promotions){
        switch (promotions.discount_type) {
            case "free_months":
                let monthlyPrice = price / 12
                price = monthlyPrice * (12- promotions.discount_value)
                break;
            case "percentage":
                let discountToApply = (promotions.discount_value * price) /100
                price -= discountToApply
                break;  
            case "fixed":
                price -= promotions.discount_value
                break;
            default:
                break;
        }
    }
  return (
        <Card className="p-5 h-52">
            <CardContent className=" h-full flex flex-col items-center justify-between">
                {promotions ? <Badge className={`bg-red-600`}>{promotions?.description}</Badge> :<div></div>}
                    <CardTitle>{subscription.name}</CardTitle>
                <CardDescription>{promotions&&<span className="line-through">{subscription.price} €</span>} {price.toFixed(2)} €</CardDescription>
                <Button disabled={disabled}>Ajouter au panier</Button>
            </CardContent>
        </Card>
        )
}

export default CardPrice
