import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a linux-blox production application. More coming soon.
        </p>
        <a
          className="App-link"
          href="github.com/hkyinked"
          target="_blank"
          rel="noopener noreferrer"
        >
check out my github for more projects.
        </a>
      </header>
    </div>
  );
}

export default App;
