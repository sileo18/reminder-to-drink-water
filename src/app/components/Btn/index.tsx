import { Dispatch, SetStateAction } from "react"

interface props {
    timerStart: boolean,
    setTimerStart: Dispatch<SetStateAction<boolean>>
}

export default function BtnStart({timerStart, setTimerStart}: props) {

    const handleStart = () => {
        setTimerStart(!timerStart)
    }

    return (
        <button onClick={handleStart} className='bg-lighter-blue rounded-md py-5 font-medium text-dark-text hover:scale-105 transition-transform'>Começar </button>
    )
}