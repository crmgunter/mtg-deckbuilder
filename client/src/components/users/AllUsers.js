import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import NewUserForm from './NewUserForm';

class AllUsers extends Component {
    state = {
        users: [],
        formDisplay: false
    }

    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios.get('/api/users')
        .then((res) => {
            this.setState({ users: res.data })
        })
    }

    revealNewUserForm = () => {
        this.setState({ formDisplay: !this.state.formDisplay })
    }

    render() {
        const newUserForm = this.state.formDisplay ? <NewUserForm/> : <button onClick={this.revealNewUserForm}>Add User</button>
        
        return (
            <div>
                {newUserForm}
                {this.state.users.map((user) => (
                    <div key={user._id}>
                        <Link to={`/users/${user._id}`}><div>{user.username}</div></Link>
                        <div>{user.bio}</div>
                        <img src={user.image} alt={user.username}/>
                    </div>
                ))}
            </div>
        );
    }
}

export default AllUsers;