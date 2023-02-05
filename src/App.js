import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span className="App-header-text">
          Розрахунок кількості вузлів у сітці.
        </span>
      </header>

      <form className="form">
        <label className="label">
          висота
          <input type="number" min="1" max="10" className="input"></input>
          <span className="units">м</span>
        </label>
        <label className="label">
          ширина
          <input type="text" className="input"></input>
          <span className="units">м</span>
        </label>
        <label className="label">
          гратка
          <input type="text" className="input"></input>
          <span className="units">cм</span>
        </label>
      </form>
    </div>
  );
}

export default App;
