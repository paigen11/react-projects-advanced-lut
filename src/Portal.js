import { Component } from 'react';
import ReactDOM from 'react-dom';

// since portal is at the root of the project in the index.html file,
// use plain JS to target it for use with React
const portalRoot = document.getElementById('portal');

export default class Portal extends Component {
  constructor() {
    super();
    this.el = document.createElement('div');
  }

  // add the new div to the portal root element
  componentDidMount = () => {
    portalRoot.appendChild(this.el);
  };

  // remove the div from the portal root whenever it unmounts
  componentWillUnmount = () => {
    portalRoot.removeChild(this.el);
  };

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}
