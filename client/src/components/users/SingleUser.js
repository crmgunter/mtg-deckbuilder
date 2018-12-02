import React, { Component } from 'react';
import axios from 'axios'

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
        axios.get(`/api/users/${this.props.match.params.userId}`)
        .then((res) => {
            console.log(res.data)
            this.setState({ user: res.data })
        })
    }

    render() {
        return (
            <div>
                <h1>Single User</h1>
                <div>{this.state.user.username}</div>
                <img src={this.state.user.image} alt={this.state.user.username}/>
                <div>{this.state.user.bio}</div>
                {this.state.user.decks.map((deck) => (
                    <div key={deck._id}>
                        <div>{deck.name}</div>
                    </div>
                ))}
            </div>
        );
    }
}

export default SingleUser;