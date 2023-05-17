import { endOfWeek, startOfWeek } from 'date-fns'
import { createEvent, createStore, sample } from 'effector'
import { $date } from '..'

export type Week = Record<'start' | 'end', Date>

export const updateWeek = createEvent<Week>()
export const $week = createStore<Week>({
    start: startOfWeek(new Date(), {
        weekStartsOn: 1,
    }),
    end: endOfWeek(new Date(), {
        weekStartsOn: 1,
    }),
}).on(updateWeek, (_, w) => w)

sample({
    clock: $date,
    fn: (date) => {
        return {
            start: startOfWeek(date, {
                weekStartsOn: 1,
            }),
            end: endOfWeek(date, {
                weekStartsOn: 1,
            }),
        }
    },
    target: updateWeek,
})
