import React, { Component } from 'react';
import styled from 'styled-components'

const CardFlex = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

class Booster extends Component {
    render() {
        return (
            <CardFlex>
                {this.props.booster.map((card, i) => (
                    <div key={i}>
                        <img src={card.imageUrl} alt={card.title}/>
                    </div>
                ))}
            </CardFlex>
        );
    }
}

export default Booster;