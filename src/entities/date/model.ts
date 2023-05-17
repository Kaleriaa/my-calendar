import { createStore, createEvent } from 'effector'

export const updateDate = createEvent<Date>()
export const $date = createStore<Date>(new Date()).on(
    updateDate,
    (_, date) => date,
)
