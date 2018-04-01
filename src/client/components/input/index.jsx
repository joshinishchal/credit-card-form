import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
    label: '',
    className: {}
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
        {label && label !== '' && (<label className={cx(className.label)}>
          {label}
        </label>)}
        <input
          className={cx(className.input)}
          {...rest}
          ref={(element) => { this.input = element }} />
      </div>
    )
  }
}

export default Input
