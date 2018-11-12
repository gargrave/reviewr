import * as React from 'react';

import Review from '../Review/Review';

import styles from './ReviewList.module.scss';

type Props = {
  reviews: Review[];
};

const ReviewList: React.SFC<Props> = ({ reviews }: Props) => (
  <div className={styles.reviewList}>
    {reviews.map((review, i) => (
      <Review key={i} review={review} />
    ))}
  </div>
);

export default ReviewList;
