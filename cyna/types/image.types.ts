interface Images {
    id: number;
    image_url : string;
}

interface CardImageProps {
    id?: number
    name?: string;
    image: Images;
    onClick?: ()=>void
}

interface ImagesGridProps {
    images: Images[]
}