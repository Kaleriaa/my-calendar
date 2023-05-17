import React from 'react'
import { $currentEvent, deleteEvent, openModal, updateDate } from '@entities'
import { SettWrapper, SettButton } from './styled'
import { useUnit } from 'effector-react'

export const Settings = () => {
    const event = useUnit($currentEvent)

    return (
        <SettWrapper>
            <SettButton onClick={() => updateDate(new Date())}>
                Today
            </SettButton>
            {event && (
                <>
                    <SettButton onClick={() => openModal()}>See</SettButton>
                    <SettButton onClick={() => deleteEvent(event)}>
                        Delete
                    </SettButton>
                </>
            )}
        </SettWrapper>
    )
}
