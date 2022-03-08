import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Link list
        </p>
        <ul>
          <li>
            <a
              className="App-link"
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer">
              Google
            </a>
          </li>
          <li>
            <a
              className="App-link"
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer">
              Youtube
            </a>
          </li>
          <li>
            <a
              className="App-link"
              href="https://twitch.com"
              target="_blank"
              rel="noopener noreferrer">
              Twitch
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
