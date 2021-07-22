export interface IOrderData {
    orderId?: string
    customerId?: string
    items?: IOrderItemData[]
    amt?: number
    orderDate?: Date
}

export interface IOrderItemData {
    productId?: string
    price?: number
    qty?: number
}