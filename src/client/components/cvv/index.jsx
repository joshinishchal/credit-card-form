import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Input from '../input'

class cvv extends Component {
  static propTypes = {
    className: PropTypes.string
  }
  render () {
    const { className } = this.props
    return (
      <div className={cx(className)}>
        <Input
          placeHolder={'CVV2'}
        />
      </div>
    )
  }
}

export default cvv
