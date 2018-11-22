import * as React from 'react'

import styles from './Review.module.scss'

interface IProps {
  /** The review to display in this instance */
  review: Review
}

/**
 * A wrapper for displaying a review.
 */
const Review: React.SFC<IProps> = ({ review }: IProps) => (
  <div className={styles.review}>
    <div className={styles.title}>{review.title}</div>
    <div className={styles.body}>{review.body}</div>
  </div>
)

export default Review
