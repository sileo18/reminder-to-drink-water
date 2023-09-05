import { UseWaterTimer } from "@/hooks/UseWater"
import { Dispatch } from "react"

interface props {
    waterDiarie: number,
    waterPerTimer: number,
    setWaterPerTimer: Dispatch<React.SetStateAction<number>>,
}

export default function InpQntTimer({waterDiarie, waterPerTimer ,setWaterPerTimer}: props) {

    const maxWaterQnt = UseWaterTimer(waterDiarie)

    return (
        <div className='flex flex-col gap-3'>

            <div className='flex justify-between'>
                <p className='text-lighter-blue'>Quantidade por timer</p>
                <p className='text-gray-text font-xs font-medium'>{waterPerTimer}ml</p>
            </div>

            <input  className="outline-none shadow-xl bg-gray-2000 w-auto rounded-md" type="range" min="50" max={maxWaterQnt} step="10" value={waterPerTimer} onChange={ (e) => setWaterPerTimer(parseInt(e.target.value))} />
        </div>
    )
}