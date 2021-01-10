export interface Productos{
    _id : string;
    name : string;
    description : string;
    sku : string;
    image : string;
    price : number;
    quantity : number;
    category? : {name:string};
    message? : string;
}


export interface ProductoPaginator{
    docs : Productos[];
    totalDocs: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage?: boolean;
    hasNextPage: boolean;
    prevPage: number;
    nextPage: number;
}

export interface Categorias{
    name:string;
}