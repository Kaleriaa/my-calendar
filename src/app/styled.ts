import { styled } from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 740px;
    border: 1px solid #e7e7e7;
    height: 95%;

    @media (max-width: 740px) {
        width: auto;
        height: 100vh;
    }
`
