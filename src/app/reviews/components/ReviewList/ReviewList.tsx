import * as React from 'react'

import Review from '../Review/Review'

import styles from './ReviewList.module.scss'

interface IProps {
  reviews: Review[]
}

const ReviewList: React.SFC<IProps> = ({ reviews }: IProps) => (
  <div className={styles.reviewList}>
    {reviews.map((review, i) => (
      <Review key={i} review={review} />
    ))}
  </div>
)

export default ReviewList
