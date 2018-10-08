import { Component } from 'react';
import ReactDOM from 'react-dom';

// since portal is at the root of the project in the index.html file,
// use plain JS to target it for use with React
const modalRoot = document.getElementById('portal');

export default class Portal extends Component {
  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children);
  }
}
