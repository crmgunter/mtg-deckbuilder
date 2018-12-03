import React, { Component } from "react"
import axios from "axios"
import AddCardForm from "./AddCardForm"
import { Link } from "react-router-dom"
import EditCardForm from "./EditCardForm"

class SingleDeck extends Component {
  state = {
    deck: {
      cards: [{}]
    },
    formToggle: false,
    editToggle: false,
    deleteConfirm: false,
    cardId: ""
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

  deleteDeck = cardId => {
    console.log("deleted successfully")
    axios.delete(
      `/api/users/${this.props.userId}/decks/${
        this.props.deckId
      }/cards/${cardId}`
    )
    this.getDeck()
  }

  toggleEdit = cardId => {
    this.setState({ cardId })
    this.setState({ editToggle: !this.state.editToggle })
  }

  deleteConfirm = () => {
    this.setState({ deleteConfirm: !this.state.deleteConfirm })
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
            {this.state.editToggle && this.state.cardId === card._id ? (
              <EditCardForm
                history={this.props.history}
                toggleEdit={this.toggleEdit}
                card={card}
                getDeck={this.getDeck}
                userId={this.props.match.params.userId}
                deckId={this.props.match.params.deckId}
              />
            ) : (
              <div>
                <Link
                  to={`/users/${this.props.match.params.userId}/decks/${
                    this.state.deck._id
                  }/cards/${card._id}`}
                >
                  <div>{card.name}</div>
                </Link>
                <img src={card.image} alt={card.name} />
                <div>{card.description}</div>
                <button onClick={() => this.toggleEdit(card._id)}>
                  Edit card
                </button>
              </div>
            )}
            <button onClick={this.deleteConfirm}>delete card</button>
            {this.state.deleteConfirm ? (
              <div>
                <p>Are you sure you want to delete?</p>
                <div>
                  <button onClick={() => this.deleteDeck(card._id)}>Yes</button>
                  <button onClick={this.deleteConfirm}>No</button>
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    )
  }
}

export default SingleDeck
