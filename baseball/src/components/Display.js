import React from 'react'

const Display = ({ balls, strikes, fouls, hits }) => {
    return (
        <>
            <h1>Display Board</h1>
            <p>Balls: {balls}</p>
            <p>Strikes: {strikes}</p>
            <p>Fouls: {fouls}</p>
            <p>Hits: {hits}</p>
        </>
    )
}

export default Display