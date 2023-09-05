import { useState, useEffect, Dispatch, SetStateAction } from 'react';

export default function UseTimer(qntWaterPerTimer: number, qntWaterTotal: number, timerStart: boolean, setTimerStart: Dispatch<SetStateAction<boolean>>) {
    
    const minutesWakeUp = 16 * 60;
    const [minutesAmount, setMinutesAmount] = useState(minutesWakeUp);

    useEffect(() => {
        let timer: any;

        if (timerStart && minutesAmount > 0) {
            timer = setInterval(() => {
                setMinutesAmount((prevMinutes) => prevMinutes - 1);
            }, 1000 * 60);
        }

        return () => clearInterval(timer);
    }, [timerStart, minutesAmount]);

    const timesPersonNeedDrink = qntWaterTotal / qntWaterPerTimer;
    const intervalMinutes = minutesAmount / timesPersonNeedDrink;
    const hours = Math.floor(intervalMinutes / 60);
    const minutes = Math.floor(intervalMinutes % 60);

    const hoursString = (qntWaterPerTimer <= 0 || qntWaterTotal <= 0) ? '00' : hours.toString().padStart(2, '0');
    const minutesString = (qntWaterPerTimer <= 0 || qntWaterTotal <= 0) ? '00' : minutes.toString().padStart(2, '0');

    return { hoursString, minutesString, timesPersonNeedDrink };
}
