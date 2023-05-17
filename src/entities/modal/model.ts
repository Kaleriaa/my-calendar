import { createEvent, createStore } from 'effector'

export const openModal = createEvent()
export const closeModal = createEvent()
export const $isModal = createStore<boolean>(false)
    .on(openModal, () => true)
    .on(closeModal, () => false)
