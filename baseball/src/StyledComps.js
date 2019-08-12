import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
`

export const InfoCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 2rem;
    p {
        margin: 0.5rem 0;
    }
`

export const StyledTable = styled.table`
    width: 100%;
    tr:nth-child(even) {
        background-color: #dddddd;
    }
}
`