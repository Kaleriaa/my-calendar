import { $currentEvent, $isModal, closeModal } from '@entities'
import { useUnit } from 'effector-react'
import React from 'react'
import ReactDOM from 'react-dom'
import { Close, Dialog, Overlay, Text } from './styled'

export const Modal = () => {
    const [isModal, event] = useUnit([$isModal, $currentEvent])
    return (
        <>
            {isModal &&
                ReactDOM.createPortal(
                    <Overlay>
                        <Dialog>
                            <Close onClick={() => closeModal()}>&#10006;</Close>
                            <Text>{`${event?.date.toDateString()} ${
                                event?.time
                            }`}</Text>
                            <Text>{event?.text}</Text>
                        </Dialog>
                    </Overlay>,
                    document.body,
                )}
        </>
    )
}
