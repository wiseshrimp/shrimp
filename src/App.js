import React, { Component } from 'react';
import './App.css';
import About from './About'
import Work from './Work'

const layers = ['layer1', 'layer2', 'layer3', 'layer4', 'layer5']

class App extends Component {
  refHandlers = {
    wrapper: el => this.wrapper = el,
    layer1: el => this.layer1 = el,
    layer2: el => this.layer2 = el,
    layer3: el => this.layer3 = el,
    layer4: el => this.layer4 = el,
    layer5: el => this.layer5 = el,
    name: el => this.name = el
  }

  constructor (props) {
    super(props)
    this.state = {
      active: "home"
    }
  }

  componentDidMount() {
    let move = (ev) => {
      if (this.layer1) {
        let { clientX, clientY } = ev
        this.layer1.style.webkitTransform = `translateX(${clientX * 15/ 100}%) translateY(${clientY * 15 / 100}%)`
        this.layer1.style.transform = `translateX(${clientX * 15/ 100}%) translateY(${clientY * 15 / 100}%)`

        this.layer2.style.webkitTransform = `translateX(${clientX * 3/ 100}%) translateY(${clientY * 3 / 100}%)`
        this.layer2.style.transform = `translateX(${clientX * 3/ 100}%) translateY(${clientY * 3 / 100}%)`
     
        this.layer3.style.webkitTransform = `translateX(${clientX * 17/ 100}%) translateY(${clientY * 17 / 100}%)`
        this.layer3.style.transform = `translateX(${clientX * 17/ 100}%) translateY(${clientY * 17 / 100}%)`

        this.layer4.style.webkitTransform = `translateX(${clientX * 7/ 100}%) translateY(${clientY * 7 / 100}%)`
        this.layer4.style.transform = `translateX(${clientX * 7/ 100}%) translateY(${clientY * 7 / 100}%)`
        
        this.layer5.style.webkitTransform = `translateX(${clientX * 15/ 100}%) translateY(${clientY * 15 / 100}%)`
        this.layer5.style.transform = `translateX(${clientX * 15/ 100}%) translateY(${clientY * 15 / 100}%)`

        this.name.style.webkitTransform = `translateX(${clientX * 3/ 100}%) translateY(${clientY * 3 / 100}%)`
        this.name.style.transform = `translateX(${clientX * 3/ 100}%) translateY(${clientY * 3 / 100}%)`
        this.wrapper.style.backgroundPosition = `${clientX * 1.1 / 200}px center`
      }
    }
    this.wrapper.addEventListener('mousemove', move)
  }

  changePage = ev => {
    this.setState({
      active: typeof ev === 'string' ? ev : ev.target.dataset.type
    })
  }

  renderHeader = headerId => (
    <div key={headerId}
      id={headerId}
      className="header"
      data-type={headerId}
      onClick={this.changePage}>{headerId}</div>
  )

  renderLayer = layerId => (
    <div key={layerId} 
      id={layerId}
      className="layer"
      ref={this.refHandlers[layerId]} />
  )

  renderHome () {
    let headers = ['work', 'about']

    return (
      <div>
        {layers.map(this.renderLayer)}
        {headers.map(this.renderHeader)}
      </div>
    )
  }

  renderPage () {
    switch (this.state.active) {
      case 'home':
        return this.renderHome()
      case 'work':
        return <Work goHome={this.changePage} />
      case 'about':
        return <About />
      default:
        return this.renderHome()
    }
  }

  render() {
    return (
      <div className="wrapper" ref={this.refHandlers.wrapper}>
        <div className="name" ref={this.refHandlers.name} data-type="home" onClick={this.changePage}>sue roh</div>
        {this.renderPage()}
      </div>
    )
  }
}

export default App
