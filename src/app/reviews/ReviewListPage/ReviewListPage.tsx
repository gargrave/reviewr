import * as React from 'react';

import mockReviews from 'api/mocks/reviews.mocks';

import ReviewForm from '../components/ReviewForm/ReviewForm';
import ReviewList from '../components/ReviewList/ReviewList';

const newReview = (body: string = '', title: string = ''): Review => ({
  body,
  title,
});

type Props = {};

type State = {
  errors: Review;
  review: Review;
  reviews: Review[];
};

class ReviewListPage extends React.Component<Props, State> {
  state = {
    errors: newReview(),
    review: newReview(),
    reviews: [...mockReviews],
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = event.target.name;
    if (key in this.state.review) {
      const value = event.target.value;
      this.setState(({ review }) => ({
        review: { ...review, [key]: value },
      }));
    }
  };

  handleSubmitReview = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { review } = this.state;
    const errors = newReview();

    if (!review.title) {
      errors.title = 'This field is required';
    }
    if (!review.body) {
      errors.body = 'This field is required';
    }

    if (errors.body || errors.title) {
      this.setState({ errors });
    } else {
      this.setState(({ reviews }) => ({
        errors: newReview(),
        review: newReview(),
        reviews: [newReview(review.body, review.title)].concat(reviews),
      }));
    }
  };

  render() {
    const { errors, review, reviews } = this.state;

    return (
      <div>
        <ReviewForm
          errors={errors}
          onInputChange={this.handleInputChange}
          onSubmit={this.handleSubmitReview}
          review={review}
        />
        <hr />

        <ReviewList reviews={reviews} />
      </div>
    );
  }
}

export default ReviewListPage;
