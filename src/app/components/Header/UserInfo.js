import React from 'react';
import HeaderStyle from './Header.scss'

export default class UserInfo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={HeaderStyle.userInfo}>
         <a className={HeaderStyle.userName}>
           <img src='./assets/images/user.jpg' width={30} height={30} alt=" "/>
           <span>User Name</span>
         </a>
         <ul className="list-unstyled">
            <li><a className="">Log out</a></li>
         </ul>
      </div>
    )
  }
}
