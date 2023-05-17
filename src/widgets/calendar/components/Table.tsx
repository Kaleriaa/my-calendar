import { formattedHours } from '../constants'
import { Field } from './Field'
import { Intervals, TableWrapper, Time } from './styled'

export const CalTable = () => {
    return (
        <TableWrapper>
            <Intervals>
                {formattedHours.map((time) => (
                    <Time key={time}>{time}</Time>
                ))}
            </Intervals>
            <Field />
        </TableWrapper>
    )
}
