export class CategoryProductResponseDto {
    name: string;
    id: number;
    images: Images[]
    constructor(name: string, id: number,  images: Images[]) {
      this.name = name;
      this.id = id;
      this.images = images;
    }
  }
  