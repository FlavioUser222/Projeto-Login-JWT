export default function formatTime(time1, time2) {
    let splitTime1 = time1.split(':')
    let splitTime2 = time2.split(':')

    let [min1, hora1] = splitTime1
    let [min2, hora2] = splitTime2

    if (min1 > 60 || min2 > 60) {
        hora1++
        hora2++
    } else if (hora1 > 24 || hora2 > 24) {
        hora1 = 0
        hora2 = 0
    }

    let somaHoras = hora1 + hora2

    return somaHoras

}