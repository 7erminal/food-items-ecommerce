type Item = {
    Active: number
    AvailableColors: string
    AvailableSizes: string
    Category: Category
    CreatedBy: number
    DateCreated: string
    DateModified: string
    Description: string
    ItemId: number
    ImagePath: string
    ItemName: string
    ItemPrice: ItemPrice
    ModifiedBy: number
    Quantity: number
}

type Category = {
    CategoryId: number
    CategoryName: string
    CreatedBy: number
    DateCreated: string
    DateModified: string
    ImagePath: string
    ModifiedBy: number
}

type ItemPrice = {
    Active: number
    AltItemPrice: number
    CreatedBy: number
    Currency: Currency
    DateCreated: string
    DateModified: string
    ItemPrice: number
    ItemPriceId: number
    ModifiedBy: number
    ShowAltPrice: boolean
}

type Currency = {
    Active: number
    CreatedBy: number
    DateCreated: string
    DateModified: string
    ModifiedBy: number
    Currency: string
    CurrencyId: number
    Symbol: string
}