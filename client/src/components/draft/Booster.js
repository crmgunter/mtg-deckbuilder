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
        storedBoosters: [],
        packCount: 0
    }

    chooseCard = async (card) => {
        this.setState({ packCount: this.state.packCount += 1 })
        if (this.state.packCount > 7) {
            this.setState({ packCount: 0 })
        }
        if (this.state.storedBoosters.length < 8) {
            this.state.chosenCards.push(card)
            const chosenCard = this.state.chosenCards
            const cardIndex = this.props.boosters.indexOf(card)
            const storedBoosters = this.props.boosters
            storedBoosters.splice(cardIndex, 1)
            this.state.storedBoosters.push(storedBoosters)
            const newState = this.state.storedBoosters
            this.setState({ storedBoosters: newState, chosenCards: chosenCard })
            await this.filterNextBooster()
        } else {
            console.log('stored packs')
            const chosenCard = this.state.chosenCards
            chosenCard.push(card)
            const storedBoosters = this.state.storedBoosters
            const cardIndex = storedBoosters[this.state.packCount - 1].indexOf(card)
            console.log(cardIndex)
            let updatedBooster = [ ...this.state.storedBoosters ]
            console.log(updatedBooster[this.state.packCount - 1])
            updatedBooster[this.state.packCount - 1].splice(cardIndex, 1)
            console.log(updatedBooster)
            this.setState({ storedBoosters: updatedBooster })
        }
    }

    filterNextBooster = () => {
        this.props.getBooster()
    }

    render() {
        return (
            <CardFlex>
                {this.state.storedBoosters.length > 7 ? (
                    <div>{this.state.storedBoosters[this.state.packCount].map((booster, i) => (
                        <div key={i}>
                            <img onClick={() => {
                                this.chooseCard(booster)
                            }} src={booster.imageUrl} alt={booster.title} />
                        </div>
                    ))}</div>
                ) : (
                        <div>
                            {this.props.boosters.map((booster, i) => (
                                <div key={i}>
                                    <img onClick={() => {
                                        this.chooseCard(booster)
                                    }} src={booster.imageUrl} alt={booster.title} />
                                </div>
                            ))}
                        </div>)}

            </CardFlex>
        );
    }
}

export default Booster;