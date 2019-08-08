import React from 'react'

const Dashboard = ({ ballsHandler, strikesHandler, foulsHandler, hitsHandler }) => {
    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={ballsHandler}>Ball</button>
            <button onClick={strikesHandler}>Strike</button>
            <button onClick={foulsHandler}>Foul</button>
            <button onClick={hitsHandler}>Hit</button>
        </div>
    )
}

export default Dashboard