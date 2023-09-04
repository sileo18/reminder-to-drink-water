import UseWater from "@/hooks/UseWater";
import WaterCup from "@/icons/WaterCup";

interface props {
    waterDiarie: number,
}

export default function LeftContainer({waterDiarie}: props) {

    const waterInL = UseWater(waterDiarie)

    return (
        <div className='flex-1'>

            <div className='bg-lighter-blue w-52 h-[350px] rounded-2xl flex flex-col justify-center items-center gap-10'>

                <p className='font-bold text-xs text-dark-text'>80%</p>

                <WaterCup />

                <div className='text-center'>
                    <p className='font-semibold text-xl text-dark-text'>Beber Água</p>
                    <p className='font-medium'>Meta: <span>{waterInL}L</span> </p>
                </div>

            </div>

        </div>
    )
}