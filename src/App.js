import React, { Component, Fragment } from 'react';
import { Transition } from 'react-spring';

import logo from './logo.svg';
import './App.css';
import { Toggle } from 'Utilities';
import { Modal, Card } from 'Elements';
import User from './User';
import UserProvider from './UserProvider';
import Drag from './Drag';

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Drag />
          <Toggle>
            {({ on, toggle }) => (
              <Fragment>
                <button onClick={toggle}>Login</button>
                <Modal on={on} toggle={toggle}>
                  <h1>Once again, still in modal</h1>
                </Modal>
              </Fragment>
            )}
          </Toggle>
        </div>
      </UserProvider>
    );
  }
}

const Header = styles => (
  <Card
    style={{
      opacity: styles.opacity,
      background: styles.bg,
      overflow: 'hidden',
      height: styles.height,
    }}
  >
    <h1>Show me</h1>
    <h3>{styles.bg}</h3>
  </Card>
);

export default App;
