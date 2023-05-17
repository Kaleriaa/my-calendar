import { styled } from 'styled-components'

export const WeekWrapper = styled.div`
    width: 100%;
    height: fit-content;
    background-color: var(--grey);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 8px 0px;
    padding-left: 20px;
`
export const DaysOfWeekWrapper = styled.div`
    display: grid;
    width: 90%;
    height: fit-content;
    place-items: center;
    grid-template-columns: repeat(7, 0.5fr);
    grid-template-rows: repeat(2, 1fr);
`
export const NamesOfWeek = styled.span`
    font-weight: 600;
    line-height: 1.8;
    font-size: 14px;
`
export const DaysOfWeek = styled.span<{ isToday: boolean }>`
    display: block;
    font-weight: 600;
    line-height: 1.8;
    text-align: center;
    font-size: 15.5px;
    width: 4vh;
    height: 4vh;
    border-radius: 100%;
    background-color: ${({ isToday }) => (isToday ? 'red' : 'transparent')};
    color: ${({ isToday }) => (isToday ? '#fff' : '#000')};
`
export const Month = styled(NamesOfWeek)`
    font-size: 16px;
`
export const SelectWeek = styled.div`
    margin-top: 14px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
`
export const NavButton = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: red;
    font-size: 17px;
    font-weight: 600;
`
export const TableWrapper = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    gap: 4px;
    overflow-y: auto;
`
export const Intervals = styled.div`
    display: flex;
    width: 15%;
    height: fit-content;
    padding: 4px;
    flex-direction: column;
    justify-content: flex-end;
`
export const Time = styled.div`
    color: #c2c2c2;
    height: 40.5px;
    text-align: center;
`
export const Ceil = styled.div<{ color: string }>`
    cursor: pointer;
    width: 100%;
    height: 40px;
    background-color: ${({ color }) => color};
    &:hover {
        filter: brightness(90%);
    }
`
export const FieldWrapper = styled.div`
    background-color: var(--grey);
    display: grid;
    width: 100%;
    grid-template-columns: repeat(7, 1fr);
    gap: 1px;
    grid-template-rows: repeat(24, 1fr);
`
