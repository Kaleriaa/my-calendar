import { $ceilCoord, $weekEvents, clickOnCeil } from '@entities'
import { useUnit } from 'effector-react'
import { CellType, colorCeilMap } from '../constants'
import { Ceil, FieldWrapper } from './styled'

export const Field = () => {
    const [coord, events] = useUnit([$ceilCoord, $weekEvents])

    const onClickCeil = (x: number, y: number) => {
        clickOnCeil({ x, y })
    }

    return (
        <FieldWrapper>
            {[...new Array(24)].map((_, i) => {
                return [...new Array(7)].map((_, j) => {
                    let cellType: CellType = CellType.Primary
                    const event = events.find(({ x, y }) => x === i && y === j)
                    if (event) {
                        cellType = CellType.Event
                    }
                    if (coord?.x === i && coord?.y === j) {
                        cellType = CellType.Selected
                    }
                    return (
                        <Ceil
                            key={`${i}-${j}`}
                            color={colorCeilMap[cellType]}
                            onClick={() => onClickCeil(i, j)}
                        />
                    )
                })
            })}
        </FieldWrapper>
    )
}
