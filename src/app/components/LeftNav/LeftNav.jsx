import React, { Component } from 'react'
import leftNavStyle from './LeftNav.scss'

const menuList = [
  {
    mainName: 'Dashboard',
    menuIcon: 'icon-home',
    hasSubMenu: false,
  }, {
    mainName: 'App Builder',
    menuIcon: 'icon-stack',
    hasSubMenu: true,
    isActive: true,
    subMenuList: [
      {
        subMenuName: 'Integration',
        subMenuLink: 'Integration',
      }, {
        subMenuName: 'Theme Design',
        subMenuLink: 'theme-design',
      }, {
        subMenuName: 'Features',
        subMenuLink: 'features',
      }, {
        subMenuName: 'Language',
        subMenuLink: 'language',
      }, {
        subMenuName: 'Settings',
        subMenuLink: 'settings',
      }, {
        subMenuName: 'App Preview',
        subMenuLink: 'app-Preview',
      }, {
        subMenuName: 'Going Live',
        subMenuLink: 'going-live',
      },
    ],
  }, {
    mainName: 'App Versions',
    menuIcon: 'icon-files-empty',
    hasSubMenu: false,
  }, {
    mainName: 'Live Apps',
    menuIcon: 'icon-cogs',
    hasSubMenu: false,
  },
]

export default class LeftNav extends Component {
  constructor(props) {
    super(props)
  }

  handleClick(e) {
    let element = e.currentTarget.parentNode
    if (element.className == '') {
      element.className = `${leftNavStyle.active }`
    } else {
      element.className = ''
    }
  }

  render() {
    const { leftClose } = this.props
    const menuItems = menuList.map((item, key) =>
      <li key={key} className={item.isActive == true ? `${leftNavStyle.active }` : null }>
        <a href="javascript:void(0)" className={item.isActive == true ? ` ${leftNavStyle.hasSubMenu }` : null } onClick={(e) => this.handleClick(e)}>
          <i className={item.menuIcon}/>
          <span className={leftNavStyle.mainMenuName}>{item.mainName}</span>
        </a>
        {
          item.hasSubMenu == true ?
            <ul className={leftNavStyle.subMenu}>
              {
                item.subMenuList.map((items, i) =>
                  <li key={i}><a href={items.subMenuLink}>{items.subMenuName}</a></li>
                )
              }
            </ul>
            :
            null
        }
      </li>
    )
    return (
      <div className={leftClose ? `${ leftNavStyle.leftNav } ${ leftNavStyle.leftClosed }` : `${ leftNavStyle.leftNav }`}>
        <ul className={leftNavStyle.mainMenu} ref="mainMenu">
          {menuItems}
        </ul>
      </div>
    )
  }
}
