import React, { Component } from 'react'
import styled from 'styled-components'

const CardFlex = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

class Booster extends Component {
    state = {
        chosenCards: []
    }

    chooseCard = (card) => {
        console.log('click', card)
        this.state.chosenCards.push(card)
        const newState = this.state.chosenCards
        this.setState({ chosenCards: newState })
    }

    filterNextBooster = () => {
        this.props.getBooster()
    }

    render() {
        return (
            <CardFlex>
                {/* {console.log(this.props.boosters[0])} */}
                {this.props.boosters.map((booster, i) => (
                    <div key={i}>
                        <img onClick={() => {
                            this.chooseCard(booster)
                            this.filterNextBooster()
                            }} src={booster.imageUrl} alt={booster.title} />
                    </div>
                ))}
            </CardFlex>
        );
    }
}

export default Booster;