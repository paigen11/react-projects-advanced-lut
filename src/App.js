import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './ToggleRenderProps';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Toggle
          render={({ on, toggle }) => (
            <div>
              {on && <h1>Show me</h1>}
              <button onClick={toggle}>Show / Hide</button>
            </div>
          )}
        />
        <Toggle
          render={({ on, toggle }) => (
            <div>
              {on && <nav>nav</nav>}
              <button onClick={toggle}>Menu</button>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
