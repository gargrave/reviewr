import * as React from 'react'

import Button from 'common/Button/Button'

import styles from './App.module.scss'

class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <h1>Reviewr</h1>
        <Button onClick={() => console.log('click')}>This is a button!</Button>
      </div>
    )
  }
}

export default App
