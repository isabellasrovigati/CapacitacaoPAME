import React from 'react';
import './styles.css';

export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      count: 0,
      background: true,
    };
  }

  up = () => {
    this.setState({ count: this.state.count + this.state.step });
  };

  down = () => {
    this.setState({ count: this.state.count - this.state.step });
  };

  updateSteps = (e) => {
    this.setState({ step: parseInt(e.target.value) || 0 });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  changeBackground = () => {
    if (this.state.background === true) {
      this.setState({ background: false });
    } else {
      this.setState({ background: true });
    }
  };

  render() {
    const { count, step, background } = this.state;
    return (
      <div
        className="counter"
        style={{
          backgroundColor: background
            ? 'rgb(104, 176, 207)'
            : 'rgb(62,145,181)',
        }}
      >
        <div className="result">{count}</div>
        
        <div className="reset" onClick={this.reset}>
          resetar
        </div>

        <button onClick={this.down}>-{step}</button>

        <button onClick={this.up}>+{step}</button>

        <input type="number" min="0" value={step} onChange={this.updateSteps} />

        <button onClick={this.changeBackground}> Mudar Fundo</button>
      </div>
    );
  }
}
