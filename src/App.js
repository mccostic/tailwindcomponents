import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App bg-blue-600">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-3xl font-bold underline">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="font-mono text-base my-4 hover:text-blue-900 hover:underline"
          href=""
          rel="noopener noreferrer"
        >
          View Components
        </a>
      </header>
    </div>
  );
}

export default App;
