import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import Nav from "./components/Nav"
import AllUsers from './components/users/AllUsers'
import SingleUser from './components/users/SingleUser'
import SingleDeck from './components/decks/SingleDeck'
import SingleCard from './components/cards/SingleCard'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/users" component={AllUsers}/>
              <Route exact path="/users/:userId" component={SingleUser}/>
              <Route exact path="/users/:userId/decks/:deckId" component={SingleDeck}/>
              <Route exact path="/users/:userId/decks/:deckId/cards/:cardId" component={SingleCard}/>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
