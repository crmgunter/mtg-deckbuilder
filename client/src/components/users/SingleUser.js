import React, { Component } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

class SingleUser extends Component {
  state = {
    user: {
      decks: [{}]
    }
  }

  componentDidMount() {
    this.getUser()
  }

  getUser = () => {
    axios.get(`/api/users/${this.props.match.params.userId}`).then(res => {
      console.log(res.data)
      this.setState({ user: res.data })
    })
  }

  render() {
    return (
      <div key={this.state.user._id}>
        <h1>Single User</h1>
        <div>{this.state.user.username}</div>
        <img src={this.state.user.image} alt={this.state.user.username} />
        <div>{this.state.user.bio}</div>
        {this.state.user.decks.map(deck => (
          <div key={deck._id}>
            <Link to={`/users/${this.state.user._id}/decks/${deck._id}`}>
              <div>{deck.name}</div>
            </Link>
          </div>
        ))}
        <Link to={`/users/${this.state.user._id}/draft`}>Play a draft</Link>
      </div>
    )
  }
}

export default SingleUser
