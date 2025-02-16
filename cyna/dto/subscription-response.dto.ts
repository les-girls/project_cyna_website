export class SubscriptionsResponseDto {
    name: string;
    price: number;
    promotions?: Promotion |null;
  
    constructor(name: string, price: number, promotions: Promotion | null) {
      this.name = name;
      this.price = price;
      this.promotions = promotions;
    }
  }