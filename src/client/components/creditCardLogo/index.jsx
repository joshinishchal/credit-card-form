import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Input from '../input'
const acceptableCreditCards = ['visa', 'master', 'amex', 'discover']
class ExpYear extends Component {
  static propTypes = {
    className: PropTypes.string,
    acceptableCreditCards: PropTypes.array,
    selected: PropTypes.oneOf(acceptableCreditCards)
  }
  static defaultProps = {
    acceptableCreditCards
  }
  render () {
    const { className } = this.props
    return (
      <div className={cx(className)}>
        <Input
          placeHolder={'Exp. Year'}
        />
      </div>
    )
  }
}

export default ExpYear
