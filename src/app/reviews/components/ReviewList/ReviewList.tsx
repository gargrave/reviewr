import * as React from 'react'

import { IReview } from '../../reviews.types'

import Review from '../Review/Review'

import styles from './ReviewList.module.scss'

export interface IReviewListProps {
  reviews: IReview[]
}

const ReviewList: React.SFC<IReviewListProps> = ({ reviews }) => (
  <div className={styles.reviewList}>
    {reviews.map((review, i) => (
      <Review key={i} review={review} />
    ))}
  </div>
)

export { ReviewList as UnwrappedReviewList }
export default React.memo(ReviewList)
