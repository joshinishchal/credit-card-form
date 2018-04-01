import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Input from '../../components/input'
import CreditCardNumber from '../../components/creditCardNumber'
import CVV from '../../components/cvv'
import ExpMonth from '../../components/expMonth'
import ExpYear from '../../components/expYear'
import CreditCardLogo from '../../components/creditCardLogo'

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
          <button>
            Submit
          </button>
        </div>
      </div>
    )
  }
}

export default CreditCardForm
