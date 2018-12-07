import React, { Component } from "react"
import axios from "axios"
import Booster from "./Booster"

class Draft extends Component {
  state = {
    sets: []
  }

  componentDidMount() {
    this.getAllSets()
  }

  // call to api to get sets
  // there's a bit of logic here that check the expansion type
  // only expansion and un-sets are draftable
  // if they are un or expansion,
  // set them in state
  // otherwise, we discard the rest

  getAllSets = () => {
    axios.get("https://api.magicthegathering.io/v1/sets").then(res => {
      const response = res.data.sets
      const sets = []
      response.forEach(set => {
        if (set.type === "expansion" || set.type === "un") {
          sets.push(set)
        }
      })
      this.setState({ sets })
    })
  }

  handleChange = event => {
    const setChosen = event.target.value
    this.setState({ setChosen })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.getBooster()
  }

  getBooster = () => {
    axios
    .get(
      `https://api.magicthegathering.io/v1/sets/${
        this.state.setChosen
      }/booster`
    )
    .then(res => {
        this.setState({ boosters: res.data.cards })
    })
  }

  render() {
    return (
      <div>
        <h1>Hello from Draft</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <select onChange={this.handleChange}>
              <option>Select a set</option>
              {this.state.sets.map(set => (
                <option key={set.code} value={set.code}>
                  {set.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button>Go</button>
          </div>
        </form>
        {this.state.boosters? <Booster chooseCard={this.chooseCard} boosters={this.state.boosters} /> : null}
      </div>
    )
  }
}

export default Draft
