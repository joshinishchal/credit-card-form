import React, { Component } from 'react'
import Input from '../../components/input'
import CreditCardNumber from '../../components/creditCardNumber'
import CVV from '../../components/cvv'

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
        </div>
      </div>
    )
  }
}

export default CreditCardForm
