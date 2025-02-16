import Link from 'next/link'
import React from 'react'
import { Card, CardFooter } from '../ui/card';

function CardImage({id, name, image, onClick} : CardImageProps) {
  return (
        <div className=" w-48 min-w-48 " onClick={onClick}>
        <Link  href={id ?`/products/${id}`: ""}  className="">
          <Card className="h-48 w-auto bg-no-repeat bg-cover bg-center relative" style={{background: image ?`no-repeat center/cover url(${image.image_url}) `: "bg-baniere"}}>
          {name &&<CardFooter className='absolute bottom-0 bg-purple-dark w-full text-white  pt-2 text-md font-semibold '>{name}</CardFooter>}
          </Card>
        </Link>
      </div>
  )
}

export default CardImage
