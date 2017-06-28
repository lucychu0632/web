import React from 'react';
import CSSModules from 'react-css-modules';
import appStyle from './App.scss';
import Layout from '../../containers/Layout/Layout';

class App extends React.Component {
  render() {
    return (
      <div styleName="app">
        <Layout />
      </div>);
  }
}
export default CSSModules(App, appStyle);