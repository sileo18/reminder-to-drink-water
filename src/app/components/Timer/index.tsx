import UseTimer from "@/hooks/UseTimer"
import { Dispatch, SetStateAction } from "react"

interface props {
    waterDiarie: number,
    waterPerTimer: number,
    timerStart: boolean,
    setTimerStart: Dispatch<SetStateAction<boolean>>
}

export default function Timer({ waterDiarie, waterPerTimer, timerStart, setTimerStart }: props) {

    const { hours, minutes } = UseTimer(waterPerTimer, waterDiarie, timerStart, setTimerStart)    

    return (
        <div className='flex gap-5 items-center justify-center'>

            <div className='flex items-center gap-1'>

                <div className='flex items-center justify-center bg-gray-4000 border-gray-2000 border-2 rounded-xl w-16 h-16'>
                    <p className='text-gray-100 text-3xl'>{ (waterPerTimer <= 0 || waterDiarie <= 0) ? '00' : '0' + String(hours.toFixed(0))}</p>
                </div>

                <p className='text-gray-2000 font-medium'>h</p>
            </div>


            <p className='text-white font-bold'>:</p>

            <div className='flex items-center gap-1'>

                <div className='flex items-center justify-center bg-gray-4000 border-gray-2000 border-2 rounded-xl w-16 h-16'>
                    <p className='text-gray-100 text-3xl'>{ (waterPerTimer <= 0 || waterDiarie <= 0) ? '00' : String(minutes).padStart(2, '0')}</p>
                </div>

                <p className='text-gray-2000 font-medium'>m</p>
            </div>

        </div>
    )
}