import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

class Input extends Component {
  static propTypes = {
    label: PropTypes.string,
    containerClassName: PropTypes.string,
    className: PropTypes.shape({
      label: PropTypes.string,
      input: PropTypes.string
    })
  }
  static defaultProps = {
    label: ''
  }
  render () {
    const {
      label,
      containerClassName,
      className,
      ...rest
    } = this.props
    return (
      <div className={cx(className)}>
        {label && label !== '' && (<label className={cx(formCls['label'], className.label)}>
          {label}
        </label>)}
        <input
          className={cx(formCls['input'], className.input)}
          {...rest}
          ref={(element) => { this.input = element }} />
      </div>
    )
  }
}

export default CreditCardForm
