
export class ProductResponseDto {
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
  promotions : Promotion | null
  constructor(name: string, 
        description: string,
        available: boolean,
        best_product: boolean,
        best_product_priority: number | null,
        categories: Category | null,
        description_technical: string,
        id: number,
        level_support: string,
        performance: string,
        price: number,
        priority: number | null,
        scalability: string,
        images: Images[],  
        promotions : Promotion | null) {
    this.name = name;
    this.description = description;
    this.available= available
    this.best_product= best_product
    this.best_product_priority= best_product_priority
    this.categories= categories
    this.description_technical= description_technical
    this.id= id
    this.level_support= level_support
    this.performance= performance
    this.price= price
    this.priority= priority
    this.scalability= scalability
    this.images= images
    this.promotions= promotions
  }
}
