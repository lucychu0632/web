import React from 'react';
// import  './index.css';
import CSSModules from 'react-css-modules';
import appStyle from './app.scss';

class App extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}} styleName="app">
        <h1>Hello World</h1>
      </div>);
  }
}
export default CSSModules(App, appStyle);