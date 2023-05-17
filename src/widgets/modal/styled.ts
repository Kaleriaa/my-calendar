import { styled } from 'styled-components'

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(115, 115, 115, 0.5);
    height: 100%;
    width: 100%;
`
export const Dialog = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: fit-content;
    padding: 30px 25px;
    border-radius: 5px;
    gap: 8px;
    background-color: #fff;
    box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
    border: 2px solid rgb(240, 240, 240);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`
export const Text = styled.span`
    font-size: 18px;
    width: 100%;
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
export const Close = styled.button`
    cursor: pointer;
    background-color: transparent;
    font-size: 18px;
    border: none;
`
