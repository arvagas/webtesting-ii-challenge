import React from 'react'

import Display from './components/Display'
import Dashboard from './components/Dashboard'

import { Container } from './StyledComps'

class App extends React.Component {
  state = {
    balls: 0,
    strikes: 0,
    fouls: 0,
    hits: 0,
  }

  ballsHandler = () => {
    if (this.state.balls === 3) {
      this.setState({
        balls: 0,
        strikes: 0,
        fouls: 0
      })
    } else this.setState({balls: this.state.balls + 1})
  }

  strikesHandler = () => {
    if (this.state.strikes === 2) {
      this.setState({
        balls: 0,
        strikes: 0,
        fouls: 0
      })
    } else this.setState({strikes: this.state.strikes + 1})
  }

  foulsHandler = () => {
    if (this.state.strikes === 0) {
      this.setState({
        strikes: this.state.strikes + 1,
        fouls: this.state.fouls + 1
      })
    } else if (this.state.strikes === 1) {
      this.setState({
        strikes: this.state.strikes + 1,
        fouls: this.state.fouls + 1
      })
    } else this.setState({fouls: this.state.fouls + 1})
  }

  hitsHandler = () => {
    this.setState({
      balls: 0,
      strikes: 0,
      fouls: 0,
      hits: this.state.hits + 1
    })
  }

  render() {
  
    return (
      <Container>
          <Display balls={this.state.balls} strikes={this.state.strikes} fouls={this.state.fouls} hits={this.state.hits}/>
          <Dashboard ballsHandler={this.ballsHandler} strikesHandler={this.strikesHandler} foulsHandler={this.foulsHandler} hitsHandler={this.hitsHandler}/>
      </Container>
    )
  }
}

export default App