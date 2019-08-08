import React from 'react'

import { InfoCont } from '../StyledComps'

const Display = ({ inning, balls, strikes, fouls, hits, outs }) => {
    return (
        <>
            <h1>Display Board</h1>
            <div style={{display:'flex', justifyContent:'space-around'}}>
                <InfoCont>
                    <p>Inning:</p>
                    <p>{inning}</p>
                </InfoCont>
                <InfoCont>
                    <p>Balls:</p>
                    <p>{balls}</p>
                </InfoCont>
                <InfoCont>
                    <p>Strikes:</p>
                    <p>{strikes}</p>
                </InfoCont>
                <InfoCont>
                    <p>Fouls:</p>
                    <p>{fouls}</p>
                </InfoCont>
                <InfoCont>
                    <p>Hits:</p>
                    <p>{hits}</p>
                </InfoCont>
                <InfoCont>
                    <p>Outs:</p>
                    <p>{outs}</p>
                </InfoCont>
            </div>
        </>
    )
}

export default Display