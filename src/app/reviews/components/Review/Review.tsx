import * as React from 'react';

import styles from './Review.module.scss';

type Props = {
  review: Review;
};

const Review: React.SFC<Props> = ({ review }: Props) => (
  <div className={styles.review}>
    <div className={styles.title}>{review.title}</div>
    <div className={styles.body}>{review.body}</div>
  </div>
);

export default Review;
