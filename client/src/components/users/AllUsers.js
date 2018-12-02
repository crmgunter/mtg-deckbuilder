import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class AllUsers extends Component {
    state = {
        users: []
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

    render() {
        return (
            <div>
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