interface Subscriptions{
    name: string;
    price: number;
    promotions: Promotion | null;
  }

interface CardPriceProps{
  subscription: Subscriptions
  disabled : boolean
}

  