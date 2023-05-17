import { createEvent, createStore, sample } from 'effector'
import { $week } from '..'

type Coords = Record<'x' | 'y', number>

export const clickOnCeil = createEvent<Coords>()
export const $ceilCoord = createStore<Coords | null>(null).on(
    clickOnCeil,
    (_, ceil) => ceil,
)

sample({ clock: $week, target: $ceilCoord.reinit! })
