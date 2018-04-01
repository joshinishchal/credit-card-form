import React, { Component } from 'react'
import Input from '../../components/input'

class CreditCardForm extends Component {
  render () {
    return (
      <div>
        Enter your credit card information
        <div>
           <Input
            placeHolder={'Name'}
          />
        </div>
      </div>
    )
  }
}

export default CreditCardForm
