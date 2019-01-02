import React, { Component } from 'react'
import styled from 'styled-components'

const CardFlex = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

class Booster extends Component {
    state = {
        chosenCards: [],
        storedBoosters: []
    }

    chooseCard = async (card) => {
        console.log('click', card)
        this.state.chosenCards.push(card)
        const chosenCard = this.state.chosenCards
        const cardIndex = this.props.boosters.indexOf(card)
        const storedBoosters = this.props.boosters
        storedBoosters.splice(cardIndex, 1)
        if (this.state.storedBoosters.length < 8) {
            this.state.storedBoosters.push(storedBoosters)
            const newState = this.state.storedBoosters
            this.setState({ storedBoosters: newState })
        }   
        this.setState({ chosenCards: chosenCard })
        await this.filterNextBooster()
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
                        }} src={booster.imageUrl} alt={booster.title} />
                    </div>
                ))}
            </CardFlex>
        );
    }
}

export default Booster;