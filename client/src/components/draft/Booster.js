import React, { Component } from 'react';
import styled from 'styled-components'

const CardFlex = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

class Booster extends Component {
    
    // I think I understand component will receive props now
    // I'm sorta on the fence still
    // Tomorrow, try componentWillReceiveProps
    // vs.
    // componentDidMount and explore why one works and one doesn't
    // has to do with setting state in a loop in parent component
    // and waiting for props to be sent
    
    componentWillReceiveProps() {
        console.log(this.props.boosters)
    }


    render() {
        return (
            <CardFlex>
                {/* {console.log(this.props.boosters[0])} */}
                {/* {this.props.boosters.map((booster, i) => (
                    <div key={i}>
                     {console.log(booster, 'hey')}
                        <img src="" alt=""/>
                    </div>
                ))} */}
            </CardFlex>
        );
    }
}

export default Booster;