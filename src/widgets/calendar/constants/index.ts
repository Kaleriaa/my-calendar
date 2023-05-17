import { eachHourOfInterval, endOfDay, format, startOfDay } from 'date-fns'

const startDate = startOfDay(new Date())
const endDate = endOfDay(new Date())

const hours = eachHourOfInterval({ start: startDate, end: endDate })
export const formattedHours = hours.map((hour) => format(hour, 'HH:mm'))

export const week = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

export enum CellType {
    Primary,
    Event,
    Selected,
}

export const colorCeilMap = {
    [CellType.Primary]: '#fff',
    [CellType.Event]: '#B4C9FF',
    [CellType.Selected]: '#7590D8',
}
