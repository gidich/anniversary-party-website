import {IOrderData} from '../interfaces'

export const orders: IOrderData[] = [
  {
    orderId: 'd101',
    customerId: 'c101',
    amt: 400,
    orderDate: new Date('2021-07-21'),
    items: [
      {
        productId: 'p101',
        qty: 1,
        price: 29.99
      },
      {
        productId: 'p102',
        qty: 2,
        price: 5.99
      }
    ]
  },
  {
    orderId: 'd102',
    customerId: 'c101',
    amt: 300,
    orderDate: new Date('2021-06-17'),
    items: [
      {
        productId: 'p101',
        qty: 2,
        price: 29.99
      },
      {
        productId: 'p103',
        qty: 1,
        price: 11.95
      }
    ]
  },
  {
    orderId: 'd103',
    customerId: 'c102',
    amt: 200,
    orderDate: new Date('2021-04-06'),
    items: [
      {
        productId: 'p103',
        qty: 2,
        price: 11.95
      }
    ]
  },
]
