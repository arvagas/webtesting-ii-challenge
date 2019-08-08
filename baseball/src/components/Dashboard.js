import React from 'react'

const Dashboard = ({ ballsHandler, strikesHandler, foulsHandler, hitsHandler }) => {
    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={ballsHandler} className='ball-btn'>Ball</button>
            <button onClick={strikesHandler} className='strike-btn'>Strike</button>
            <button onClick={foulsHandler} className='foul-btn'>Foul</button>
            <button onClick={hitsHandler} className='hit-btn'>Hit</button>
        </div>
    )
}

export default Dashboard