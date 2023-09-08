import UseTimer from "@/hooks/UseTimer"
import CloseTag from "@/icons/CloseTag"
import WaterCupBigger from "@/icons/WaterCupBigger"
import { Dispatch, SetStateAction, useState } from "react"

interface props {
    setIsDone: Dispatch<SetStateAction<boolean>>
}

export default function Reminder({ setIsDone }: props) {

    const handleClose = () => {
        setIsDone(false)
    }

    return (



        <div className="flex justify-center items-center bg-opacity-70 min-w-full min-h-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-950 z-20">
            <div className="flex flex-col justify-center items-center bg-gray-4000 relative  w-[300px] h-[250px] py-[65px] rounded-xl ">



                <div className="flex flex-col justify-center items-center gap-6 relative min-w-full ">

                    <svg width={40} height={62}>
                        <WaterCupBigger />
                    </svg>

                    <p className="text-lighter-blue text-center font-semibold text-2xl">Lembrete para <br /> beber água!</p>


                    <div className="absolute bottom-36 right-[-8px] m-4 hover:scale-90 transition-transform cursor-pointer" onClick={handleClose}>
                        <CloseTag />
                    </div>

                </div>



            </div>
        </div>

    )
}