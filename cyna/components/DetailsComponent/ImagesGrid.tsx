'use client';
import React from 'react'
import ImageGrid from './CardImage';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';

function ImagesGrid({images} : ImagesGridProps) {
    const [selectedImages, setSelectedImages]= React.useState(images[0])
    return (
        <div className='flex flex-col-reverse'>
            <ScrollArea className='overflow-auto max-w-full '>
                <div className='flex flex-row'>
                {images.map((image, index) =>{
                    return <ImageGrid key={index} onClick={()=>setSelectedImages(image)}  image={image}  />
                })}
                </div>
                 <ScrollBar orientation="horizontal" />
                </ScrollArea>
            <img src={selectedImages.image_url} className='aspect-square w-full  max-w-full h-[50vh] min-w-72'></img>
        </div>
  )
}

export default ImagesGrid
