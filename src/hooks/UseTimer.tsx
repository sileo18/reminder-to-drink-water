import { useState, useEffect } from 'react'

export default function UseTimer(qntWaterPerTimer: number, qntWaterTotal: number, timerStart: boolean) {

    console.log(timerStart)

    const hoursWakeUp = 16

    const minutesWakeUp = hoursWakeUp * 60

    const [minutesAmount, setMinutesAmount] = useState(minutesWakeUp)

    const timesPersonNeedDrink = qntWaterTotal / qntWaterPerTimer

    const intervalMinutes = minutesWakeUp / timesPersonNeedDrink

    const hours = Math.floor(intervalMinutes / 60)

    const minutes = Math.floor(intervalMinutes % 60)

    useEffect(() => {
        if (timerStart === true) {
            const timerId = setTimeout(() => {
                setMinutesAmount(state => state - 1);
                console.log('INICIOU')
            }, 1000);

            // Lembre-se de limpar o timer ao desmontar o componente.
            return () => {
                clearTimeout(timerId);
            };
        }
    }, [minutesAmount]);



    let hoursString = hours.toString()

    if (qntWaterPerTimer <= 0) {
        hoursString = '00'
    }

    if (hoursString.length == 1) {

        hoursString = '0' + hoursString
    }

    let minutesString = minutes.toString()

    if (qntWaterPerTimer <= 0) {
        minutesString = '00'
    }

    if (minutesString.length == 1) {

        minutesString = '0' + minutesString
    }


    return { hoursString, minutesString, timesPersonNeedDrink }
}