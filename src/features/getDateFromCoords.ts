export const getDateFromCoords = (x: number) => {
    const time = `${x.toString().padStart(2, '0')}:00-${(x + 1)
        .toString()
        .padStart(2, '0')}:00`
    return time
}
