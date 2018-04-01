import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Input from '../../components/input'
import CreditCardNumber from '../../components/creditCardNumber'
import CVV from '../../components/cvv'
import ExpMonth from '../../components/expMonth'
import ExpYear from '../../components/expYear'
import CreditCardLogo from '../../components/creditCardLogo'
import ValidationHelper from '../../utils/validationHelpers'
// TODO: React app for some reason does not work well with `semantic-ui-react`. Fix it later.
import { Button } from 'semantic-ui-react'
import cx from 'classnames/bind'
import styles from './styles.scss'
const classNames = cx.bind(styles)

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
      creditCardType: '',
      error: {
        name: true,
        creditCardNumber: true,
        cvv: true,
        expMonth: true,
        expYear: true
      }
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.getValidCreditCard = this.getValidCreditCard.bind(this)
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
  handleNameChange = (e) => {
    const name = e.target.value
    const result = ValidationHelper.validateForm({name: name})
    this.setState({
      name: name,
      error: {
        ...this.state.error,
        name: !result.name
      }
    })
  }
  getValidCreditCard = (validCreditCard) => {
    this.setState({
      creditCardNumber: validCreditCard.creditCardNumber,
      creditCardType: validCreditCard.type,
      error: {
        ...this.state.error,
        creditCardNumber: validCreditCard.isValid
      }
    })
  }
  render () {
    const {
            name,
            creditCardNumber,
            cvv,
            expMonth,
            expYear,
            creditCardType
          } = this.state
    return (
      <div>
        Enter your credit card information
        <div>
          <span className={classNames('error', { 'show': this.state.error.name, hide: !this.state.error.name })}>
            Please Provide your name as it appears on credit card.
          </span>
          <Input
            value={name}
            placeHolder={'Name'}
            onChange={this.handleNameChange}
          />
          <CreditCardNumber
            creditCardNumber={creditCardNumber}
            getValidCreditCard={this.getValidCreditCard}
          />
          <CVV />
          <div>
            <ExpMonth />
            <ExpYear />
          </div>
          <CreditCardLogo
            selected={creditCardType}
          />
          <Button
            positive
            color={'green'}
          >
            Submit
          </Button>
        </div>
      </div>
    )
  }
}

export default CreditCardForm
