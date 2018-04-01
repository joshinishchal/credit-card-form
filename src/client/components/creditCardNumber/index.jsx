import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Input from '../input'

class creditCardNumber extends Component {
  static propTypes = {
    getValidCreditCard: PropTypes.func.isRequired
  }
  render () {
    return (
      <div className={cx(className)}>
        <Input
          placeHolder={'Card Number'}
        />
      </div>
    )
  }
}

export default creditCardNumber
