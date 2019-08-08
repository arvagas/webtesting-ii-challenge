import React from 'react'

import Display from './components/Display'
import Dashboard from './components/Dashboard'

import { Container } from './StyledComps'

class App extends React.Component {
  state = {
    inning: 1,
    balls: 0,
    strikes: 0,
    fouls: 0,
    hits: 0,
    outs: 0,
    
    inningData: [],
    ballsTotal: 0,
    strikesTotal: 0,
    foulsTotal: 0,
    hitsTotal: 0,
  }

  ballsHandler = () => {
    if (this.state.balls === 3) {
      this.setState({
        balls: 0,
        strikes: 0,
        fouls: 0
      })
    } else this.setState({balls: this.state.balls + 1})

    this.setState({
      ballsTotal: this.state.ballsTotal + 1
    })
  }

  strikesHandler = () => {
    if (this.state.strikes === 2) {
      this.setState({
        balls: 0,
        strikes: 0,
        fouls: 0,
        strikesTotal: this.state.strikesTotal + 1
      })
      this.outsHandler(1)
    } else this.setState({
      strikes: this.state.strikes + 1,
      strikesTotal: this.state.strikesTotal + 1
    })
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

    
    this.setState({
      foulsTotal: this.state.foulsTotal + 1
    })
  }

  hitsHandler = () => {
    this.setState({
      balls: 0,
      strikes: 0,
      fouls: 0,
      hits: this.state.hits + 1,
      hitsTotal: this.state.hitsTotal + 1
    })
  }

  outsHandler = (num) => {
    let extra = typeof(num) === 'number' ? num : 0

    if (this.state.outs === 2) {
      this.setState({
        inning: this.state.inning + 1,
        balls: 0,
        strikes: 0,
        fouls: 0,
        outs: 0,

        inningData: [...this.state.inningData, {
          inning: this.state.inning,
          ballsTotal: this.state.ballsTotal,
          strikesTotal: this.state.strikesTotal + extra,
          foulsTotal: this.state.foulsTotal,
          hitsTotal: this.state.hitsTotal,
        }],
        ballsTotal: 0,
        strikesTotal: 0,
        foulsTotal: 0,
        hitsTotal: 0
      })
    } else this.setState({
      balls: 0,
      strikes: 0,
      fouls: 0,
      outs: this.state.outs + 1
    })
  }

  render() {
  
    return (
      <Container>
          <Display inning={this.state.inning} balls={this.state.balls} strikes={this.state.strikes} fouls={this.state.fouls} hits={this.state.hits} outs={this.state.outs}/>
          <Dashboard ballsHandler={this.ballsHandler} strikesHandler={this.strikesHandler} foulsHandler={this.foulsHandler} hitsHandler={this.hitsHandler} outsHandler={this.outsHandler}/>
      </Container>
    )
  }
}

export default App