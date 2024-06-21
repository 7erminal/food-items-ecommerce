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

type Purpose = {
    PurposeId: number
    Purpose: string
    ImagePath: string
    Visible: boolean
    Description: string
    Active: number
    DateCreated: string
    DateModified: string
    CreatedBy: number
    ModifiedBy: number
}

type ItemPurpose = {
    ItemPurposeId: number
    Item: Item
    Purpose: Purpose
    Active: number
    DateCreated: string
    DateModified: string
    CreatedBy: number
    ModifiedBy: number
}

type Feature = {
    FeatureId: number
    FeatureName: string
    ImagePath: string
    Visible: boolean
    Description: string
    Active: number
    DateCreated: string
    DateModified: string
    CreatedBy: number
    ModifiedBy: number
}

type ItemFeature = {
    ItemFeatureId: number
    Item: Item
    Feature: Feature
    Active: number
    DateCreated: string
    DateModified: string
    CreatedBy: number
    ModifiedBy: number
}

type Order = {
    Cost: number
    CreatedBy: number
    Currency: number
    DateCreated: string
    DateModified: string
    ModifiedBy: number
    OrderDate: string
    OrderId: number
    Quantity: number
}

type Transaction = {
    Active: number
    Amount: number
    DateCreated: string
    DateModified: string
    ModifiedBy: number
    CreatedBy: number
    StatusId: number
    TransactionCurrency: number
    TransactionId: number
}