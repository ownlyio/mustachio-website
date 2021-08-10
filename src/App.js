import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mustachio by Ownly
        </p>
        <a
          className="App-link"
          href="https://ownly.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ownly.io
        </a>
      </header>
    </div>
  );
}

export default App;
