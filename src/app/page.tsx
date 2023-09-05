"use client"

import Profile from './components/Profile'
import LeftContainer from './components/LeftContainer'
import InputDia from './components/InputDia'
import InpQntTimer from './components/InpQntTimer'
import Timer from './components/Timer'
import BtnStart from './components/Btn'
import { useState } from 'react'

export default function Home() {

  const [waterDiarie, setWaterDiarie] = useState(0)

  const [waterPerTimer, setWaterPerTimer ] = useState(0)

  const [timerStart, setTimerStart] = useState(false)

  return (
    <main className='flex min-h-screen justify-center items-center bg-gray-950'>

      <div className='w-[630px] h-[489px] flex flex-col justify-start items-start gap-20'>


        {/* Profile */}
        <Profile />

        {/* Bottom */}
        <div className='flex w-full items-start justify-start'>

          {/* Left Container */}
          <LeftContainer  waterDiarie={waterDiarie} />

          {/* Right Container*/}
          <div className='flex flex-col gap-10  flex-1'>

            {/* Input 1 */}
            <InputDia data={waterDiarie} setData={setWaterDiarie} />

            {/* Input 2 */}
            <InpQntTimer waterPerTimer={waterPerTimer} waterDiarie={waterDiarie} setWaterPerTimer={setWaterPerTimer} />

            {/* Timer */}
            <Timer setTimerStart={setTimerStart} timerStart={timerStart} waterDiarie={waterDiarie} waterPerTimer={waterPerTimer} />

            {/* Button Start */}
            <BtnStart timerStart={timerStart} setTimerStart={setTimerStart}/>
          </div>

        </div>

      </div>

    </main>
  )
}
