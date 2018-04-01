import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Input from '../input'

class ExpYear extends Component {
  static propTypes = {
    className: PropTypes.string
  }
  render () {
    const { className } = this.props
    return (
      <div className={cx(className)}>
        <Input
          placeHolder={'Exp. Year'}
        />
      </div>
    )
  }
}

export default ExpYear
