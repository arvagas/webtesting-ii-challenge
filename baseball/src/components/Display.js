import React from 'react'

import InningInfo from './InningInfo'

import { InfoCont, StyledTable } from '../StyledComps'

const Display = ({ inning, balls, strikes, fouls, hits, outs, inningData }) => {
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
            <h1>Inning Information</h1>
            <StyledTable>
                <tr style={{width:'100%'}}>
                    <th>Inning</th>
                    <th>Balls Thrown</th>
                    <th>Strikes Thrown</th>
                    <th>Foul Hits</th>
                    <th>Pretty Good Hits</th>
                </tr>
                {inningData.map(item => (
                    <InningInfo item={item} />
                ))}
            </StyledTable>
        </>
    )
}

export default Display