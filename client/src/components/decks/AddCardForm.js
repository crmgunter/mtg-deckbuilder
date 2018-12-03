import React, { Component } from "react"
import axios from 'axios'

class AddCardForm extends Component {
  state = {
    name: "",
    image: "",
    description: ""
  }

  handleChange = event => {
    const name = event.target.name
    const newState = { ...this.state }
    newState[name] = event.target.value
    this.setState(newState)
  }

  handleSubmit = event => {
      event.preventDefault()
      const payload = {
          name: this.state.name,
          image: this.state.image,
          description: this.state.description
      }
      axios.post(`/api/users/${this.props.userId}/decks/${this.props.deckId}/cards`, payload)
      .then((res) => {
          console.log(res)
        this.props.toggleForm()
         this.props.getDeck()
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input onChange={this.handleChange} type="text" placeholder="name" name="name" value={this.state.name} />
          </div>
          <div>
            <input onChange={this.handleChange} type="text" placeholder="image" name="image" value={this.state.image}/>
          </div>
          <div>
            <input onChange={this.handleChange} type="text" placeholder="description" name="description" value={this.state.description}/>
          </div>
          <button>Submit</button><button onClick={this.props.toggleForm}>Cancel</button>
        </form>
      </div>
    )
  }
}

export default AddCardForm
