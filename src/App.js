import logo from "./logo.png"
import './App.css';
import Dictionary from "./Dictionary"

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} alt="Logo" className="App-logo img-fluid" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer"><a href="https://github.com/julianasaavedra/dictionary-project">Open-source code</a> by Juliana</footer>
      </div>
    </div>
  );
}

export default App;
