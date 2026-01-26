export function formatTime(time1, time2) {
    let splitTime1 = time1.split(':')
    let splitTime2 = time2.split(':')

    let [hora1, min1] = splitTime1
    let [hora2, min2] = splitTime2

    let minutos = min1 + min2
    let horas = hora1 + hora2

    if (minutos >= 60) {
        horas += Math.floor(minutos / 60)
        minutos = minutos % 60
    }
    if (horas > 24) {
        horas = horas % 24
    }

  
    return `${String(horas).padStart(2,'0')}:${String(minutos).padStart(2,'0')}`

}