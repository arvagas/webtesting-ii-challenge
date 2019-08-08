import React from 'react'
import ReactDOM from 'react-dom'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import App from './App'

afterEach(cleanup)

describe('<App />', () => {
  it('App renders without crashing', () => {
    render(<App />)
  })

  describe('<Display />', () => {
    it('Display renders without crashing', () => {
      const wrapper = render(<App />)
      expect(wrapper.getByText(/Display Board/i))
    })
  })

  describe('<Dashboard />', () => {
    it('Dashboard renders without crashing', () => {
      const wrapper = render(<App />)
      expect(wrapper.getByText(/Dashboard/i))
    })
  })

  //@@@@@@@@@@@@@@@@@@@@ Ball Button Tests @@@@@@@@@@@@@@@@@@@
  describe('Ball Button', () => {
    it('Ball button increase ball value by 1', () => {
      const wrapper = render(<App />)
      const ballBtn = document.querySelector('.ball-btn')
      fireEvent.click(ballBtn)
      expect(wrapper.getByText(/Balls: 1/i))
    })
    
    it('Balls count resets to 0 after 4 clicks', () => {
      const wrapper = render(<App />)
      const ballBtn = document.querySelector('.ball-btn')
      fireEvent.click(ballBtn)
      fireEvent.click(ballBtn)
      fireEvent.click(ballBtn)
      fireEvent.click(ballBtn)
      expect(wrapper.getByText(/Balls: 0/i))
    })
    
    it('Strikes count resets to 0 after 4 clicks', () => {
      const wrapper = render(<App />)
      const ballBtn = document.querySelector('.ball-btn')
      fireEvent.click(ballBtn)
      fireEvent.click(ballBtn)
      fireEvent.click(ballBtn)
      fireEvent.click(ballBtn)
      expect(wrapper.getByText(/Strikes: 0/i))
    })
        
    it('Fouls count resets to 0 after 4 clicks', () => {
      const wrapper = render(<App />)
      const ballBtn = document.querySelector('.ball-btn')
      fireEvent.click(ballBtn)
      fireEvent.click(ballBtn)
      fireEvent.click(ballBtn)
      fireEvent.click(ballBtn)
      expect(wrapper.getByText(/Fouls: 0/i))
    })
  })
  
  //@@@@@@@@@@@@@@@@@@@@ Strike Button Tests @@@@@@@@@@@@@@@@@@@@
  describe('Strike Button', () => {
    it('Strike button increase strike value by 1', () => {
      const wrapper = render(<App />)
      const strikeBtn = document.querySelector('.strike-btn')
      fireEvent.click(strikeBtn)
      expect(wrapper.getByText(/Strikes: 1/i))
    })
    
    it('Balls count resets to 0 after 3 clicks', () => {
      const wrapper = render(<App />)
      const strikeBtn = document.querySelector('.strike-btn')
      fireEvent.click(strikeBtn)
      fireEvent.click(strikeBtn)
      fireEvent.click(strikeBtn)
      expect(wrapper.getByText(/Balls: 0/i))
    })
    
    it('Strikes count resets to 0 after 3 clicks', () => {
      const wrapper = render(<App />)
      const strikeBtn = document.querySelector('.strike-btn')
      fireEvent.click(strikeBtn)
      fireEvent.click(strikeBtn)
      fireEvent.click(strikeBtn)
      expect(wrapper.getByText(/Strikes: 0/i))
    })
        
    it('Fouls count resets to 0 after 3 clicks', () => {
      const wrapper = render(<App />)
      const strikeBtn = document.querySelector('.strike-btn')
      fireEvent.click(strikeBtn)
      fireEvent.click(strikeBtn)
      fireEvent.click(strikeBtn)
      expect(wrapper.getByText(/Fouls: 0/i))
    })
  })
    
  //@@@@@@@@@@@@@@@@@@@@ Foul Button Tests @@@@@@@@@@@@@@@@@@@@
  describe('Foul Button', () => {
    it('Foul button increase foul value by 1', () => {
      const wrapper = render(<App />)
      const foulBtn = document.querySelector('.foul-btn')
      fireEvent.click(foulBtn)
      expect(wrapper.getByText(/Fouls: 1/i))
    })
    
    it('Strike count increases up to 2', () => {
      const wrapper = render(<App />)
      const foulBtn = document.querySelector('.foul-btn')
      fireEvent.click(foulBtn)
      expect(wrapper.getByText(/Strikes: 1/i))
      fireEvent.click(foulBtn)
      expect(wrapper.getByText(/Strikes: 2/i))
      fireEvent.click(foulBtn)
      expect(wrapper.getByText(/Strikes: 2/i))
    })
  })
      
  //@@@@@@@@@@@@@@@@@@@@ Hit Button Tests @@@@@@@@@@@@@@@@@@@@
  describe('Hit Button', () => {
    it('Hit button increase hit value by 1', () => {
      const wrapper = render(<App />)
      const hitBtn = document.querySelector('.hit-btn')
      fireEvent.click(hitBtn)
      expect(wrapper.getByText(/Hits: 1/i))
    })
    
    it('Balls counts resets to 0 on click', () => {
      const wrapper = render(<App />)
      const hitBtn = document.querySelector('.hit-btn')
      fireEvent.click(hitBtn)
      expect(wrapper.getByText(/Balls: 0/i))
    })
        
    it('Strikes counts resets to 0 on click', () => {
      const wrapper = render(<App />)
      const hitBtn = document.querySelector('.hit-btn')
      fireEvent.click(hitBtn)
      expect(wrapper.getByText(/Strikes: 0/i))
    })
        
    it('Fouls counts resets to 0 on click', () => {
      const wrapper = render(<App />)
      const hitBtn = document.querySelector('.hit-btn')
      fireEvent.click(hitBtn)
      expect(wrapper.getByText(/Fouls: 0/i))
    })
  })
})