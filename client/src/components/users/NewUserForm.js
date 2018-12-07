import React, { Component } from 'react';

class NewUserForm extends Component {
    render() {
        return (
            <div>
                <div><label htmlFor="username">Username:</label>
                <input type="text" name="username"/></div>
                <div><label htmlFor="image">Image:</label>
                <input type="text" name="image"/></div>
                <div><label htmlFor="bio">Bio:</label>
                <input type="text" name="bio"/></div>
                <button>Submit</button>
                <button>Cancel</button>
            </div>
        );
    }
}

export default NewUserForm;