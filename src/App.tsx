import * as React from 'react';

import mockReviews from './api/mocks/reviews.mocks';

import ReviewList from './app/reviews/components/ReviewList/ReviewList';

import styles from './App.module.scss';

class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <h1>Reviewr</h1>
        <main className={styles.main}>
          <ReviewList reviews={mockReviews} />
        </main>
      </div>
    );
  }
}

export default App;
