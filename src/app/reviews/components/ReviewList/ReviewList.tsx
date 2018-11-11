import * as React from 'react';

import Review from '../Review/Review';

type Props = {
  reviews: Review[];
};

const ReviewList: React.SFC<Props> = ({ reviews }: Props) => (
  <div>
    {reviews.map((review, i) => (
      <Review key={i} review={review} />
    ))}
  </div>
);

export default ReviewList;
