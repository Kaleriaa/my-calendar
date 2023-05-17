import React from 'react'
import { useUnit } from 'effector-react'
import {
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
    format,
    addWeeks,
    subWeeks,
} from 'date-fns'
import { week } from '../constants'
import { $date, updateDate } from '@entities'
import {
    DaysOfWeek,
    DaysOfWeekWrapper,
    Month,
    NamesOfWeek,
    NavButton,
    SelectWeek,
    WeekWrapper,
} from './styled'

export const Week = () => {
    const date = useUnit($date)
    const monthName = format(date, 'MMMM')
    const year = date.getFullYear()
    const daysOfWeek = eachDayOfInterval({
        start: startOfWeek(date, { weekStartsOn: 1 }),
        end: endOfWeek(date, { weekStartsOn: 1 }),
    })

    const formattedDates = daysOfWeek.map((date) => format(date, 'dd.MM.yyyy'))
    return (
        <WeekWrapper>
            <DaysOfWeekWrapper>
                {week.map((day, i) => (
                    <NamesOfWeek key={i}>{day}</NamesOfWeek>
                ))}
                {formattedDates.map((date) => {
                    return (
                        <DaysOfWeek
                            key={date}
                            isToday={new Date().toLocaleDateString() === date}>
                            {date.split('.')[0]}
                        </DaysOfWeek>
                    )
                })}
            </DaysOfWeekWrapper>
            <SelectWeek>
                <NavButton onClick={() => updateDate(subWeeks(date, 1))}>
                    &lt;
                </NavButton>
                <Month>
                    {monthName} {year}
                </Month>
                <NavButton onClick={() => updateDate(addWeeks(date, 1))}>
                    &gt;
                </NavButton>
            </SelectWeek>
        </WeekWrapper>
    )
}
