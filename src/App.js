import React, { Component, Fragment, createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { Toggle } from 'Utilities';
import { Modal } from 'Elements';

const UserContext = createContext();

class UserProvider extends Component {
  state = {
    id: '123',
    name: 'Paige',
    email: 'paige@gmail.com',
  };

  return() {
    <UserContext.Provider
      value={{
        user: this.state,
      }}
    >
      {this.props.children}
    </UserContext.Provider>;
  }
}

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Toggle>
            {({ on, toggle }) => (
              <>
                <button onClick={toggle}>Login</button>
                <Modal on={on} toggle={toggle}>
                  <h1>Once again, still in modal</h1>
                </Modal>
              </>
            )}
          </Toggle>
        </div>
      </UserProvider>
    );
  }
}

export default App;
