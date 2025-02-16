interface Category {
    id: number;
    name : string;
    description? : string;
    images? : Images[];
    priority? : number |null;
    visibility? : boolean;
    stock?: number;
}