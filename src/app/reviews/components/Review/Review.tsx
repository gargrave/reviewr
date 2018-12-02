import * as React from 'react'

import { IReview } from '../../reviews.types'

import styles from './Review.module.scss'

export interface IReviewProps {
  /** The review to display in this instance */
  review: IReview
}

/**
 * A wrapper for displaying a review.
 */
const Review: React.SFC<IReviewProps> = ({ review }) => (
  <div className={styles.review}>
    <div className={styles.title}>{review.title}</div>
    <div className={styles.body}>{review.body}</div>
  </div>
)

export { Review as UnwrappedReview }
export default React.memo(Review)
