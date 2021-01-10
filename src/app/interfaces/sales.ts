export interface Sales {
    _id :string,
    user_id :{_id:string , user : string, name : string, lastname : string , email : string},
    product_id : {_id : string, name : string, sku : number, price : number },
    cantidad : number,
    priceWeb : number,
    pago : [{_id:string , pay : string,},{status : string , date : any}],
    priceProd : number,
    totalDB : number,
    totalWeb : number
}

export interface SalesPaginator{
    docs : Sales[],
    totalDocs: number,
    limit: number,
    totalPages: number,
    page: number,
    pagingCounter: number,
    hasPrevPage?: boolean,
    hasNextPage: boolean,
    prevPage: number,
    nextPage: number
}