"use client"

import { Dispatch } from "react"

interface InputProps {
    data: number,
    setData: Dispatch<React.SetStateAction<number>>,
}

export default function InputDia({data, setData}: InputProps) {    

    return (
        <div className='flex flex-col gap-3'>

            <div className='flex justify-between'>
                <p className='text-lighter-blue'>Meta diária</p>
                <p className='text-gray-text font-xs'>{data}ml</p>
            </div>

            <input className="outline-none shadow-xl bg-gray-2000 w-auto rounded-md" type="range" min="50" max="3000" step="50" value={data} onChange={ (e) => setData(parseInt(e.target.value))} />
        </div>
    )
}