import React from 'react'

const Display = ({ inning, balls, strikes, fouls, hits, outs }) => {
    return (
        <>
            <h1>Display Board</h1>
            <p>Inning: {inning}</p>
            <p>Balls: {balls}</p>
            <p>Strikes: {strikes}</p>
            <p>Fouls: {fouls}</p>
            <p>Hits: {hits}</p>
            <p>Outs: {outs}</p>
        </>
    )
}

export default Display