import { FC } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { CustomerReviewContainer } from './review-container-by-customer';
import { ProductReviewContainer } from './review-container-by-product';
import { OrderContainer } from './order-container';

const ComponentPropTypes = {
  customerId: PropTypes.string.isRequired,
  productId: PropTypes.string.isRequired
}

interface ComponentProp {
  customerId: string
  productId: string,
}

export type ComponentProps = InferProps<typeof ComponentPropTypes> & ComponentProp;

export const CommercePage: FC<ComponentProps> = ({
  customerId,
  productId,
  }) => {
    return <>
      <div>
        <CustomerReviewContainer customerId={customerId} />
        <ProductReviewContainer productId={productId} />
        <OrderContainer customerId={customerId}  />
      </div>
    </>
}