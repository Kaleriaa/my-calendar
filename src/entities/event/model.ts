import { createEvent, createStore, sample } from 'effector'
import { $ceilCoord, $week, Week } from '..'
import { eachDayOfInterval, isEqual } from 'date-fns'
import { getDateFromCoords } from '@features/getDateFromCoords'

type EventCoords = {
    text: string
    week: Week
    x: number
    y: number
    date: Date
    time: string
}

export const deleteEvent = createEvent<EventCoords>()
export const addEventCoords = createEvent<{ text: string }>()
export const $eventsCoords = createStore<EventCoords[]>([])

sample({
    clock: addEventCoords,
    source: { ceil: $ceilCoord, events: $eventsCoords, week: $week },
    filter: ({ ceil }) => Boolean(ceil),
    fn: ({ ceil, events, week }, { text }) => [
        ...events,
        {
            text,
            x: ceil!.x,
            y: ceil!.y,
            week,
            date: eachDayOfInterval({
                start: week.start,
                end: week.end,
            })[ceil!.y],
            time: getDateFromCoords(ceil!.x),
        },
    ],
    target: $eventsCoords,
})

sample({
    clock: deleteEvent,
    source: $eventsCoords,
    fn: (events, { x, y }) => {
        const indx = events.findIndex((ev) => ev.x === x && ev.y === y)
        return [
            ...events.slice(0, indx),
            ...events.slice(indx + 1, events.length),
        ]
    },
    target: $eventsCoords,
})

export const $weekEvents = sample({
    source: { week: $week, events: $eventsCoords },
    fn: ({ week, events }) => {
        return events.filter(
            ({ week: eventWeek }) =>
                isEqual(eventWeek.start, week.start) &&
                isEqual(eventWeek.end, week.end),
        )
    },
})

export const $currentEvent = sample({
    clock: $ceilCoord,
    source: $weekEvents,
    fn: (wEvents, curr) =>
        wEvents.find((ev) => ev.x === curr?.x && ev.y === curr.y) ?? null,
})
