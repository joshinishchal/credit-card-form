import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Input from '../../components/input'
import CreditCardNumber from '../../components/creditCardNumber'
import CVV from '../../components/cvv'
import ExpMonth from '../../components/expMonth'
import ExpYear from '../../components/expYear'
import CreditCardLogo from '../../components/creditCardLogo'
import ValidationHelper from '../../utils/validationHelpers'

class CreditCardForm extends Component {
  static propTypes = {
    name: PropTypes.string,
    creditCardNumber: PropTypes.string,
    cvv: PropTypes.string,
    expMonth: PropTypes.string,
    expYear: PropTypes.string
  }
  static defaultProps = {
    name: '',
    creditCardNumber: '',
    cvv: '',
    expMonth: '',
    expYear: ''
  }
  constructor (props) {
    super(props)
    const {
            name,
            creditCardNumber,
            cvv,
            expMonth,
            expYear
          } = this.props
    this.state = {
      name,
      creditCardNumber,
      cvv,
      expMonth,
      expYear,
      error: {
        name: true,
        creditCardNumber: true,
        cvv: true,
        expMonth: true,
        expYear: true
      }
    }
  }
  isSubmitEnabled = () => {
    const {
            name,
            creditCardNumber,
            cvv,
            expMonth,
            expYear
          } = this.state
    const result = ValidationHelper.validateForm({ name: name, ccNumber: creditCardNumber, cvv: cvv, ccYear: expYear, ccMonth: expMonth })
    return (
              result.name &&
              result.ccNumber &&
              result.cvv &&
              result.ccYear &&
              result.ccMonth
            )
  }
  render () {
    return (
      <div>
        Enter your credit card information
        <div>
          <Input
            placeHolder={'Name'}
          />
          <CreditCardNumber />
          <CVV />
          <div>
            <ExpMonth />
            <ExpYear />
          </div>
          <CreditCardLogo />
          <button
            disabled={!this.isSubmitEnabled()}
            >
            Submit
          </button>
        </div>
      </div>
    )
  }
}

export default CreditCardForm
