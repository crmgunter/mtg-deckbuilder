import React, { Component } from "react"
import axios from "axios"
import AddCardForm from "./AddCardForm"

class SingleDeck extends Component {
  state = {
    deck: {
      cards: [{}]
    },
    formToggle: false
  }

  componentDidMount() {
    this.getDeck()
  }

  getDeck = () => {
    axios
      .get(
        `/api/users/${this.props.match.params.userId}/decks/${
          this.props.match.params.deckId
        }`
      )
      .then(res => {
        this.setState({ deck: res.data })
      })
  }

  toggleForm = () => {
    this.setState({ formToggle: !this.state.formToggle })
  }

  render() {
    return (
      <div>
        <h1>Single deck</h1>
        {this.state.formToggle ? (
          <AddCardForm
            userId={this.props.match.params.userId}
            deckId={this.props.match.params.deckId}
            toggleForm={this.toggleForm}
            getDeck={this.getDeck}
          />
        ) : (
          <button onClick={this.toggleForm}>Add Card</button>
        )}
        <div>{this.state.deck.name}</div>
        {this.state.deck.cards.map((card, index) => (
          <div key={index}>
            <div>{card.name}</div>
            <img src={card.image} alt={card.name} />
            <div>{card.description}</div>
          </div>
        ))}
      </div>
    )
  }
}

export default SingleDeck
