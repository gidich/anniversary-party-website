import {IReviewData} from '../interfaces'

export const reviews: IReviewData[] = [
  {
    reviewId: 'r101',
    customerId: 'c101',
    productId: 'p101',
    rating: 4,
    reviewDate: new Date('2021-07-21'),
    reviewDesc: 'amazing product at affordable price'
  },
  {
    reviewId: 'r102',
    customerId: 'c101',
    productId: 'p102',
    rating: 2.5,
    reviewDate: new Date('2021-05-16'),
    reviewDesc: 'you get what you pay for'
  },
  {
    reviewId: 'r103',
    customerId: 'c102',
    productId: 'p102',
    rating: 5,
    reviewDate: new Date('2021-06-11'),
    reviewDesc: 'steal deal'
  }
]
