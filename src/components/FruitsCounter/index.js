// Write your code here

import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  eatMango = () => {
    this.setState(preMangoCount => ({mangoCount: preMangoCount.mangoCount + 1}))
  }

  eatBanana = () => {
    this.setState(preBananaCount => ({
      bananaCount: preBananaCount.bananaCount + 1,
    }))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="bg-container">
        <div className="fruit-bg">
          <h1 className="fruit-heading">
            Bob ate <span className="counter">{mangoCount}</span> mangoes
            <span className="counter">{bananaCount}</span> bananas
          </h1>
          <div className="fruit-container">
            <div className="fruit-item-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="mango-img"
              />
              <button type="button" onClick={this.eatMango}>
                Eat Mango
              </button>
            </div>
            <div className="fruit-item-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="banana-img"
              />
              <button type="button" onClick={this.eatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
