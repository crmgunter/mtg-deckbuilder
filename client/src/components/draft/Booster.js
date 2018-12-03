import React, { Component } from 'react';

class Booster extends Component {
    render() {
        return (
            <div>
                <h1>booster</h1>
                {this.props.booster.map((card, i) => (
                    <div key={i}>
                        <img src={card.imageUrl} alt={card.title}/>
                    </div>
                ))}
            </div>
        );
    }
}

export default Booster;