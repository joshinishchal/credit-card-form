import React, { Component } from 'react'
import logo from './logo.svg'
import styles from './App.scss'
import cx from 'classnames/bind'
const classNames = cx.bind(styles)

class App extends Component {
  render() {
    return (
      <div className={classNames('App')}>
        <header className={classNames('App-header')}>
          <img src={logo} className={classNames('App-logo')} alt="logo" />
          <h1 className={classNames('App-title')}>Welcome to React</h1>
        </header>
        <p className={classNames('App-intro')}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
