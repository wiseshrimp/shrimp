import React, { Component } from 'react';
import './App.css';

class App extends Component {
  refHandlers = {
    wrapper: el => this.wrapper = el,
    layer1: el => this.layer1 = el
  }
  componentDidMount() {
    let move = (ev) => {
      let { clientX, clientY } = ev
      this.layer1.style.webkitTransform = `translateX(${clientX * 15/ 100}%) translateY(${clientY * 15 / 100}%)`
      this.layer1.style.transform = `translateX(${clientX * 15/ 100}%) translateY(${clientY * 15 / 100}%)`
      this.wrapper.style.backgroundPosition = `${clientX * 1.1 / 200}px center`
    }
    this.wrapper.addEventListener('mousemove', move)
  }
  render() {
    return (
      <div className="wrapper" ref={this.refHandlers.wrapper}>
        <div className="layer-1" ref={this.refHandlers.layer1}></div>
      </div>
    );
  }
}

export default App;
