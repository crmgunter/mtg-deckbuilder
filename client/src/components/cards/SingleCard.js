import React, { Component } from 'react';

class SingleCard extends Component {
    render() {
        return (
            <div>
                <form>
                    <div><input placeholder="name" type="text" name="name"/></div>
                    <div><button>submit</button></div>
                </form>
            </div>
        );
    }
}

export default SingleCard;