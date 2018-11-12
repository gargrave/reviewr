import * as React from 'react';

import ReviewListPage from './app/reviews/ReviewListPage/ReviewListPage';

import styles from './App.module.scss';

const App: React.SFC = () => (
  <div className={styles.app}>
    <h1>Reviewr</h1>
    <main className={styles.main}>
      <ReviewListPage />
    </main>
  </div>
);

export default App;
