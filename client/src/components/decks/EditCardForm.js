import React, { Component } from "react"
import axios from "axios";

class EditCardForm extends Component {
    state = {
        card: this.props.card
    }

    handleChange = (event) => {
        const name = event.target.name
        const updatedState = { ...this.state.card }
        updatedState[name] = event.target.value
        this.setState({ card: updatedState })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const payload = {
            name: this.state.card.name,
            image: this.state.card.image,
            description: this.state.card.description
        }
        axios.patch(`/api/users/${this.props.userId}/decks/${this.props.deckId}/cards/${this.props.card._id}`, payload)
        .then(() => {
            this.props.getDeck()
            this.props.toggleEdit()
        })
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div><input onChange={this.handleChange} type="text" name="name" value={this.state.card.name}/></div>
            <div><input onChange={this.handleChange} type="text" name="image" value={this.state.card.image}/></div>
            <div><input onChange={this.handleChange} type="text" name="description" value={this.state.card.description}/></div>
            <button>submit</button>
        </form>
      </div>
    )
  }
}

export default EditCardForm
