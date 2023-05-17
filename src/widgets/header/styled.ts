import { styled } from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: 65px;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
export const Title = styled.h1`
    font-weight: 500;
    font-size: 20.5px;
`
export const AddButton = styled.button`
    color: red;
    font-size: 36px;
    font-weight: 100;
    cursor: pointer;
    border: none;
    background-color: transparent;
    &:disabled {
        color: #e6e6e6;
        cursor: not-allowed;
    }
`
