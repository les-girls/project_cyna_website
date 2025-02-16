interface ProductDetailProps {
    params: {
      id: string;
    };
  }

  interface Products {
    name: string;
    description: string;
    available: boolean
    best_product: boolean
    best_product_priority: number | null
    categories:  Category | null
    description_technical: string
    id: number
    level_support: string
    performance: string
    price: number
    priority: number | null
    scalability: string
    images: Images[]
    promotions: Promotion
  }