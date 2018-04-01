const moment = require('moment')
function isValid (str, regex, range) {
  let isValid = false
  isValid = (
    str &&
    typeof str === 'string' &&
    regex.exec(str)
  )
  if (range && isValid) isValid = isInRange(str, range)
  return isValid
}
function isInRange (str, range) {
  return (
    str &&
    typeof str === 'string' &&
    str.length >= range.low &&
    str.length <= range.high
  )
}
function getCreditCardType (str) {
  // All Visa card numbers start with a 4. New cards have 16 digits. Old cards have 13.
  const visa = new RegExp(/^4[0-9]{12}(?:[0-9]{3})?$/)
  // MasterCard numbers either start with the numbers 51 through 55 or with the numbers 2221 through 2720. All have 16 digits.
  const mastercard = new RegExp(/^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/)
  // American Express card numbers start with 34 or 37 and have 15 digits.
  const amex = new RegExp(/^3[47][0-9]{13}$/)
  if (visa.exec(str)) return 'VISA'
  if (mastercard.exec(str)) return 'MASTERCARD'
  if (amex.exec(str)) return 'AMEX'
  return ''
}

function validateForm ({ name, ccNumber, cvv, ccYear, ccMonth }) {
    const regexString = new RegExp('^[^<>]*$')
    return {
      name: !isValid(name, regexString, { low: 1, high: 100 }),
      ccNumber: (['VISA', 'MASTERCARD', 'AMEX'].indexOf(getCreditCardType(ccNumber)) === -1),
      cvv: !isValid(cvv, regexString, { low: 4, high: 4 }),
      ccYear: !isValid(ccYear, regexString, { low: 4, high: 4 }) && moment(`${ccYear}-${ccMonth}-01`).isAfter(Date.now()),
      ccMonth: !isValid(ccMonth, regexString, { low: 2, high: 2 }) && moment(`${ccYear}-${ccMonth}-01`).isAfter(Date.now())
    }
}

module.exports = {
  isValid,
  isInRange,
  getCreditCardType,
  validateForm
}
