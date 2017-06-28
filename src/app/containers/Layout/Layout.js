import React from 'react';
import Header from '../../components/Header/Header';
import LeftNav from '../../components/LeftNav/LeftNav';
import HeaderStyle from '../../components/Header/Header.scss'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      leftClose: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      leftClose: !this.state.leftClose,
    })
  }
  render() {
    const { children } = this.props
    return (
      <div className={this.state.leftClose ? HeaderStyle.openLeft:''}>
        <Header {...this.props} handleClick={this.handleClick} className={this.state.leftClose ? ` icon-menu-open ${ HeaderStyle.menuIcon }`:` icon-menu-close ${ HeaderStyle.menuIcon }`} />
        <div className="container">
          <LeftNav {...this.props} leftClose={this.state.leftClose}/>
          <div className="right-container">
            {children}
          </div>
        </div>
      </div>
    )
  }
}

export default Layout
