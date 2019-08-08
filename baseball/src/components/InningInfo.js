import React from 'react'

const InningInfo = ({ item }) => {
    return (
        <tr>
            <td>{item.inning}</td>
            <td>{item.ballsTotal}</td>
            <td>{item.strikesTotal}</td>
            <td>{item.foulsTotal}</td>
            <td>{item.hitsTotal}</td>
        </tr>
    )
}

export default InningInfo