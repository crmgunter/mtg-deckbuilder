import React, { Component } from 'react';
import axios from 'axios'

class NewUserForm extends Component {
    state = {

    }

    componentDidMount() {

    }

    handleChange = (event) => {
        const newState = { ...this.state }
        newState[event.target.name] = event.target.value
        this.setState(newState)
    }

    addUser = (event) => {
        event.preventDefault()
        const payload = {
            username: this.state.username,
            image: this.state.image,
            bio: this.state.bio
        }
        axios.post(`/api/users`, payload)
            .then(() => {
                this.props.getAllUsers()
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addUser}>
                    <div><label htmlFor="username">Username:</label>
                        <input onChange={this.handleChange} type="text" name="username" value={this.state.username} /></div>
                    <div><label htmlFor="image">Image:</label>
                        <input onChange={this.handleChange} type="text" name="image" value={this.state.image} /></div>
                    <div><label htmlFor="bio">Bio:</label>
                        <input onChange={this.handleChange} type="text" name="bio" value={this.state.bio} /></div>
                    <button>Submit</button>
                    <button>Cancel</button>
                </form>
            </div>
        );
    }
}

export default NewUserForm;