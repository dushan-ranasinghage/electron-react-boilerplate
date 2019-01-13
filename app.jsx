import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="./utils/react-logo.svg" className="App-logo react" alt="react logo" height="200px" width="200px"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          
            Learn <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >React-Electron
        </a>
        <img src="./utils/electron-logo.svg" className="App-logo electron" alt="electron logo" height="100px" width="100px"/>
        </header>
      </div>
    )
  }
}
