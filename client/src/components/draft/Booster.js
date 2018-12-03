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
                {/* {console.log(this.props.boosters[0])} */}
                {this.props.boosters.map((booster, i) => (
                    <div key={i}>
                     {console.log(booster, 'hey')}
                        <img src={booster.imageUrl} alt={booster.title}/>
                    </div>
                ))}
            </CardFlex>
        );
    }
}

export default Booster;