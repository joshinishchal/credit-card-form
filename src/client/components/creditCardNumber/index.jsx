import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Input from '../input'
import ValidationHelper from '../../utils/validationHelpers'

class CreditCardNumber extends Component {
  static propTypes = {
    creditCardNumber: PropTypes.string.isRequired,
    getValidCreditCard: PropTypes.func.isRequired,
    className: PropTypes.string
  }
  static defaultProps = {
    creditCardNumber: '',
    getValidCreditCard: () => {}
  }
  constructor (props) {
    super(props)
    this.state = {
      creditCardNumber: props.creditCardNumber,
      error: {
        creditCardNumberError: true
      }
    }
  }
  validateCreditCard = (e) => {
    const cardNumber = e.target.value
    const result = ValidationHelper.validateForm({ccNumber: cardNumber})
    this.setState({
      creditCardNumber: cardNumber,
      error: {
        creditCardNumberError: !result.ccNumber
      }
    })
    this.props.getValidCreditCard({
      creditCardNumber: cardNumber,
      type: ValidationHelper.getCreditCardType(cardNumber),
      isValid: result.ccNumber
    })
  }
  render () {
    const { className } = this.props
    const { creditCardNumber } = this.state
    return (
      <div className={cx(className)}>
        <span className={cx(className)}>
          Please provide valid credit card number.
        </span>
        <Input
          value={creditCardNumber}
          placeHolder={'Card Number'}
          onChange={this.validateCreditCard}
        />
      </div>
    )
  }
}

export default CreditCardNumber
