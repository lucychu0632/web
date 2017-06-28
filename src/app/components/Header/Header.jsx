import React, { Component } from 'react'
import HeaderStyle from './Header.scss'

import UserInfo from './UserInfo'

export default class Header extends Component {
  render() {
    const { className,logoPath } = this.props
    return (
      <div className={HeaderStyle.header + ' clearfix'}>
        <div className={HeaderStyle.left}>
          <a href="" className={HeaderStyle.logo}><img src={logoPath}  alt="" /></a>
          <span className={className} onClick={() => this.props.handleClick()}/>
        </div>
        <div className={HeaderStyle.right}>
          <UserInfo />
        </div>
      </div>
    )
  }
}
