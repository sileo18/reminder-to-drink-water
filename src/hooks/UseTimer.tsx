import { useState, useEffect, Dispatch, SetStateAction } from 'react';

export default function UseTimer(isDone: boolean, setIsDone:Dispatch<SetStateAction<boolean>>,  WaterPerTimer?: number, WaterTotal?: number, timerStart?: boolean, setTimerStart?: Dispatch<SetStateAction<boolean>>) {

    const INITIAL_TIME_IN_SECONDS = 16 * 60 * 60;

    const [remainingSeconds, setRemainingSeconds] = useState(INITIAL_TIME_IN_SECONDS);

    console.log(setTimerStart)

    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;

        const tick = () => {
            if (timerStart === true && remainingSeconds > 0) {
                setRemainingSeconds((prevSeconds) => prevSeconds - 1);
                timer = setTimeout(tick, 1000);
            }
        };

        tick(); // Inicia o timer

        return () => {
            if (timer) {
                clearTimeout(timer);
                isDone = true
            }
        };
    }, [remainingSeconds, timerStart]);

    // Calcula as horas e minutos com base no tempo restante total em segundos
    const hours = Math.floor(remainingSeconds / 3600);
    const minutes = Math.floor((remainingSeconds % 3600) / 60);

    return { hours, minutes, isDone, setIsDone };
}
