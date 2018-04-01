import React, { Component } from 'react'
import Input from '../../components/input'
import CreditCardNumber from '../../components/creditCardNumber'
import CVV from '../../components/cvv'
import ExpMonth from '../../components/expMonth'
import ExpYear from '../../components/expYear'
import CreditCardLogo from '../../components/creditCardLogo'

class CreditCardForm extends Component {
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
