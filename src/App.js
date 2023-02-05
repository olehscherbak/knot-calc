import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    height: 4,
    width: 5,
    grid: 7,
  };

  hangleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  knotCalc = () => {
    const { height, width, grid } = this.state;
    const knotAmountVertical = Math.round((100 * height) / grid + 1);
    const knotAmountHorisont = Math.round((100 * width) / grid + 1);
    const result = knotAmountVertical * knotAmountHorisont;

    return result;
  };

  render() {
    const { height, width, grid } = this.state;
    const knotAmount = this.knotCalc();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span className="App-header-text">
            Розрахунок кількості вузлів у сітці.
          </span>
        </header>
        <form className="form" name="form">
          <label className="label">
            висота
            <input
              type="number"
              name="height"
              min="1"
              max="10"
              value={height}
              className="input"
              onChange={this.hangleChange}
            ></input>
            <span className="units">м</span>
          </label>
          <label className="label">
            ширина
            <input
              type="number"
              name="width"
              min="1"
              max="10"
              value={width}
              className="input"
              onChange={this.hangleChange}
            ></input>
            <span className="units">м</span>
          </label>
          <label className="label">
            гратка
            <input
              type="number"
              name="grid"
              min="1"
              max="10"
              value={grid}
              className="input"
              onChange={this.hangleChange}
            ></input>
            <span className="units">cм</span>
          </label>
        </form>
        <div className="result">
          <span className="knotAmount">{knotAmount}</span>
          <span>{`сітка ${height}x${width}м-${grid}см`}</span>
        </div>
      </div>
    );
  }
}

export default App;
