import { $ceilCoord, addEventCoords } from '@entities/index'
import { AddButton, Title, Wrapper } from './styled'
import { useUnit } from 'effector-react'

export const Header = () => {
    const ceilSelected = useUnit($ceilCoord)
    const onAddEvent = () => {
        const text = prompt()
        if (text) addEventCoords({ text })
    }

    return (
        <Wrapper>
            <Title>Interview Calendar</Title>
            <AddButton onClick={onAddEvent} disabled={!ceilSelected}>
                +
            </AddButton>
        </Wrapper>
    )
}
